import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc, query, where, orderBy, Timestamp } from "firebase/firestore";
import { Loader2, CheckCircle, Edit, Trash2, RefreshCw, Search } from "lucide-react";
import { useLocation } from "wouter";

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  createdAt: Timestamp;
  completed?: boolean;
  country?: string;
}

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [contactRequests, setContactRequests] = useState<ContactRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<ContactRequest[]>([]);
  const [activeTab, setActiveTab] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingRequest, setEditingRequest] = useState<ContactRequest | null>(null);
  const [deletingRequest, setDeletingRequest] = useState<ContactRequest | null>(null);
  
  // Check if user is authenticated
  useEffect(() => {
    if (!user) {
      navigate("/admin");
    }
  }, [user, navigate]);

  // Fetch contact requests from Firestore
  const fetchContactRequests = async () => {
    setLoading(true);
    try {
      const db = getFirestore();
      const contactsRef = collection(db, "contact-requests");
      const q = query(contactsRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      
      const requests: ContactRequest[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Omit<ContactRequest, "id">;
        requests.push({
          id: doc.id,
          ...data,
        });
      });
      
      setContactRequests(requests);
      filterRequests(requests, activeTab, searchQuery);
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      toast({
        title: "Error",
        description: "Failed to load contact requests. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    if (user) {
      fetchContactRequests();
    }
  }, [user]);

  // Filter requests based on tab and search query
  const filterRequests = (requests: ContactRequest[], tab: string, query: string) => {
    let filtered = requests;
    
    // Filter by tab (completed status)
    if (tab === "pending") {
      filtered = filtered.filter(req => !req.completed);
    } else if (tab === "completed") {
      filtered = filtered.filter(req => req.completed);
    }
    
    // Filter by search query
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      filtered = filtered.filter(req => 
        req.name?.toLowerCase().includes(lowercaseQuery) ||
        req.email?.toLowerCase().includes(lowercaseQuery) ||
        req.phone?.toLowerCase().includes(lowercaseQuery) ||
        req.message?.toLowerCase().includes(lowercaseQuery) ||
        req.service?.toLowerCase().includes(lowercaseQuery) ||
        req.country?.toLowerCase().includes(lowercaseQuery)
      );
    }
    
    setFilteredRequests(filtered);
  };

  // Update filtered requests when tab or search changes
  useEffect(() => {
    filterRequests(contactRequests, activeTab, searchQuery);
  }, [activeTab, searchQuery, contactRequests]);

  // Mark request as completed
  const markAsCompleted = async (request: ContactRequest) => {
    try {
      const db = getFirestore();
      const requestRef = doc(db, "contact-requests", request.id);
      await updateDoc(requestRef, {
        completed: !request.completed
      });
      
      // Update local state
      const updatedRequests = contactRequests.map(req => 
        req.id === request.id ? { ...req, completed: !request.completed } : req
      );
      setContactRequests(updatedRequests);
      
      toast({
        title: request.completed ? "Marked as pending" : "Marked as completed",
        description: `Request from ${request.name} has been updated.`,
      });
    } catch (error) {
      console.error("Error updating contact request:", error);
      toast({
        title: "Error",
        description: "Failed to update request status. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Save edited request
  const saveEditedRequest = async () => {
    if (!editingRequest) return;
    
    try {
      const db = getFirestore();
      const requestRef = doc(db, "contact-requests", editingRequest.id);
      await updateDoc(requestRef, {
        name: editingRequest.name,
        email: editingRequest.email,
        phone: editingRequest.phone || "",
        service: editingRequest.service || "",
        message: editingRequest.message,
        country: editingRequest.country || ""
      });
      
      // Update local state
      const updatedRequests = contactRequests.map(req => 
        req.id === editingRequest.id ? editingRequest : req
      );
      setContactRequests(updatedRequests);
      
      toast({
        title: "Request updated",
        description: `Request from ${editingRequest.name} has been updated.`,
      });
      
      setEditingRequest(null);
    } catch (error) {
      console.error("Error updating contact request:", error);
      toast({
        title: "Error",
        description: "Failed to update request. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Delete request
  const deleteRequest = async () => {
    if (!deletingRequest) return;
    
    try {
      const db = getFirestore();
      const requestRef = doc(db, "contact-requests", deletingRequest.id);
      await deleteDoc(requestRef);
      
      // Update local state
      const updatedRequests = contactRequests.filter(req => req.id !== deletingRequest.id);
      setContactRequests(updatedRequests);
      
      toast({
        title: "Request deleted",
        description: `Request from ${deletingRequest.name} has been deleted.`,
      });
      
      setDeletingRequest(null);
    } catch (error) {
      console.error("Error deleting contact request:", error);
      toast({
        title: "Error",
        description: "Failed to delete request. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Format date
  const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <Container>
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => logout().then(() => navigate("/admin"))}>
            Logout
          </Button>
        </div>
        
        <div className="bg-card rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold">Contact Requests</h2>
              <p className="text-muted-foreground">Manage consultation requests from potential clients</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search requests..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Button 
                variant="outline" 
                onClick={fetchContactRequests}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="h-4 w-4 mr-2" />
                )}
                Refresh
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="all">All Requests</TabsTrigger>
            </TabsList>
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-lg">Loading requests...</span>
              </div>
            ) : filteredRequests.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <p className="text-lg">No {activeTab !== "all" ? activeTab : ""} requests found</p>
                {searchQuery && <p className="mt-2">Try adjusting your search query</p>}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRequests.map((request) => (
                  <Card key={request.id} className={request.completed ? "border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800" : ""}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{request.name}</CardTitle>
                          <CardDescription className="mt-1">{request.email}</CardDescription>
                        </div>
                        {request.completed && (
                          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-green-200 dark:border-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-2 mt-2">
                        {request.phone && (
                          <div>
                            <span className="text-sm font-medium">Phone:</span>
                            <span className="text-sm ml-2">{request.phone}</span>
                          </div>
                        )}
                        
                        {request.country && (
                          <div>
                            <span className="text-sm font-medium">Country:</span>
                            <span className="text-sm ml-2">{request.country}</span>
                          </div>
                        )}
                        
                        {request.service && (
                          <div>
                            <span className="text-sm font-medium">Service:</span>
                            <span className="text-sm ml-2">{request.service}</span>
                          </div>
                        )}
                        
                        <div>
                          <span className="text-sm font-medium">Date:</span>
                          <span className="text-sm ml-2">{formatDate(request.createdAt)}</span>
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium">Message:</span>
                          <p className="text-sm mt-1 whitespace-pre-wrap">{request.message}</p>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex justify-between pt-2">
                      <Button
                        variant={request.completed ? "outline" : "default"}
                        size="sm"
                        onClick={() => markAsCompleted(request)}
                      >
                        {request.completed ? "Mark as Pending" : "Mark as Completed"}
                      </Button>
                      
                      <div className="flex gap-2">
                        <Dialog open={editingRequest?.id === request.id} onOpenChange={(open) => !open && setEditingRequest(null)}>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="icon" onClick={() => setEditingRequest({...request})}>
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit Contact Request</DialogTitle>
                              <DialogDescription>
                                Make changes to the contact request details below.
                              </DialogDescription>
                            </DialogHeader>
                            
                            {editingRequest && (
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="name" className="text-right">Name</Label>
                                  <Input
                                    id="name"
                                    value={editingRequest.name}
                                    onChange={(e) => setEditingRequest({...editingRequest, name: e.target.value})}
                                    className="col-span-3"
                                  />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="email" className="text-right">Email</Label>
                                  <Input
                                    id="email"
                                    type="email"
                                    value={editingRequest.email}
                                    onChange={(e) => setEditingRequest({...editingRequest, email: e.target.value})}
                                    className="col-span-3"
                                  />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="phone" className="text-right">Phone</Label>
                                  <Input
                                    id="phone"
                                    value={editingRequest.phone || ""}
                                    onChange={(e) => setEditingRequest({...editingRequest, phone: e.target.value})}
                                    className="col-span-3"
                                  />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="country" className="text-right">Country</Label>
                                  <Input
                                    id="country"
                                    value={editingRequest.country || ""}
                                    onChange={(e) => setEditingRequest({...editingRequest, country: e.target.value})}
                                    className="col-span-3"
                                  />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="service" className="text-right">Service</Label>
                                  <Input
                                    id="service"
                                    value={editingRequest.service || ""}
                                    onChange={(e) => setEditingRequest({...editingRequest, service: e.target.value})}
                                    className="col-span-3"
                                  />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="message" className="text-right">Message</Label>
                                  <Textarea
                                    id="message"
                                    value={editingRequest.message}
                                    onChange={(e) => setEditingRequest({...editingRequest, message: e.target.value})}
                                    className="col-span-3"
                                    rows={4}
                                  />
                                </div>
                              </div>
                            )}
                            
                            <DialogFooter>
                              <Button variant="outline" onClick={() => setEditingRequest(null)}>Cancel</Button>
                              <Button onClick={saveEditedRequest}>Save changes</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        
                        <AlertDialog open={deletingRequest?.id === request.id} onOpenChange={(open) => !open && setDeletingRequest(null)}>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="icon" onClick={() => setDeletingRequest(request)}>
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the contact request from {request.name}.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel onClick={() => setDeletingRequest(null)}>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={deleteRequest} className="bg-red-500 hover:bg-red-600">Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </Tabs>
        </div>
      </div>
    </Container>
  );
}