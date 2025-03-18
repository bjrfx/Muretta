import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "wouter";

type AuthMode = "login" | "register" | "reset";

export default function Auth() {
  const { user, signIn, signUp, resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();
  
  // Redirect to dashboard if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/admin/dashboard");
    }
  }, [user, navigate]);

  const handleAuth = async (mode: AuthMode) => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      switch (mode) {
        case "login":
          await signIn(email, password);
          setSuccess("Logged in successfully!");
          navigate("/admin/dashboard");
          break;
        case "register":
          await signUp(email, password);
          setSuccess("Account created successfully!");
          break;
        case "reset":
          await resetPassword(email);
          setSuccess("Password reset email sent!");
          break;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardContent className="pt-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Admin Portal
              </h2>
            </div>

            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
                <TabsTrigger value="reset">Reset Password</TabsTrigger>
              </TabsList>

              {error && (
                <Alert variant="destructive" className="mb-4">
                  {error}
                </Alert>
              )}

              {success && (
                <Alert className="mb-4 bg-green-50 text-green-700 border-green-200">
                  {success}
                </Alert>
              )}

              <TabsContent value="login">
                <form onSubmit={(e) => { e.preventDefault(); handleAuth("login"); }}>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Sign In"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={(e) => { e.preventDefault(); handleAuth("register"); }}>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Create Account"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="reset">
                <form onSubmit={(e) => { e.preventDefault(); handleAuth("reset"); }}>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Reset Password"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}