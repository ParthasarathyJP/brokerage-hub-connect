import Header from "@/components/Header";
import BillingProfileForm from "@/components/BillingProfileForm";
import { Toaster } from "@/components/ui/toaster";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Profile Settings</h1>
          <p className="text-muted-foreground mt-1">
            Update your personal and billing information
          </p>
        </div>
        <BillingProfileForm />
      </main>
      <Toaster />
    </div>
  );
};

export default Profile;
