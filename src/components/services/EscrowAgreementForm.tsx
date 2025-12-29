import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Shield } from "lucide-react";

const formSchema = z.object({
  agreementId: z.string().optional(),
  bookingId: z.string().min(1, "Booking ID required"),
  customerName: z.string().min(2, "Customer name required"),
  customerEmail: z.string().email("Valid email required"),
  vendorName: z.string().min(2, "Vendor name required"),
  vendorEmail: z.string().email("Valid email required"),
  serviceDescription: z.string().min(10, "Service description required"),
  totalAmount: z.string().min(1, "Amount required"),
  escrowAmount: z.string().min(1, "Escrow amount required"),
  releaseConditions: z.string().min(10, "Release conditions required"),
  disputeResolution: z.enum(["platform_mediation", "arbitration", "legal"]),
  validityPeriod: z.string().min(1, "Validity period required"),
  customerAcceptance: z.boolean().refine((val) => val === true, "Customer must accept"),
  vendorAcceptance: z.boolean().refine((val) => val === true, "Vendor must accept"),
});

const EscrowAgreementForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agreementId: `ESC-${Date.now()}`,
      bookingId: "",
      customerName: "",
      customerEmail: "",
      vendorName: "",
      vendorEmail: "",
      serviceDescription: "",
      totalAmount: "",
      escrowAmount: "",
      releaseConditions: "",
      disputeResolution: "platform_mediation",
      validityPeriod: "30",
      customerAcceptance: false,
      vendorAcceptance: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Escrow Agreement Created",
      description: `Agreement ${values.agreementId} is now active. Funds are secured.`,
    });
    form.reset();
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Escrow Agreement Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="agreementId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agreement ID</FormLabel>
                    <FormControl>
                      <Input disabled {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bookingId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Booking Reference</FormLabel>
                    <FormControl>
                      <Input placeholder="Booking ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="border-b pb-4">
              <h4 className="font-medium mb-4">Customer Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="customerEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="customer@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="border-b pb-4">
              <h4 className="font-medium mb-4">Vendor Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="vendorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vendor Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Business/Vendor name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vendorEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vendor Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="vendor@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="serviceDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Detailed description of services to be delivered..." className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="totalAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Service Amount (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Total amount" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="escrowAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Escrow Hold Amount (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Amount to hold" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="validityPeriod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Validity (Days)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="7">7 Days</SelectItem>
                        <SelectItem value="15">15 Days</SelectItem>
                        <SelectItem value="30">30 Days</SelectItem>
                        <SelectItem value="60">60 Days</SelectItem>
                        <SelectItem value="90">90 Days</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="releaseConditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fund Release Conditions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Conditions that must be met for releasing escrow funds (e.g., service completion, customer approval)..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="disputeResolution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dispute Resolution Method</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="platform_mediation">Platform Mediation</SelectItem>
                      <SelectItem value="arbitration">Third-party Arbitration</SelectItem>
                      <SelectItem value="legal">Legal Proceedings</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-muted p-4 rounded-lg space-y-4">
              <h4 className="font-medium">Agreement Acceptance</h4>
              <FormField
                control={form.control}
                name="customerAcceptance"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      I (Customer) agree to the escrow terms and authorize fund holding
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vendorAcceptance"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      I (Vendor) agree to the escrow terms and release conditions
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">Create Escrow Agreement</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EscrowAgreementForm;
