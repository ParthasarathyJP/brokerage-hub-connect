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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { RotateCcw } from "lucide-react";

const cancellationReasons = [
  "Change of plans",
  "Found better alternative",
  "Vendor not responsive",
  "Pricing issues",
  "Quality concerns",
  "Service not as described",
  "Emergency/Personal reasons",
  "Other",
];

const formSchema = z.object({
  requestType: z.enum(["cancellation", "refund", "reschedule"]),
  bookingId: z.string().min(1, "Booking ID required"),
  serviceDate: z.string().min(1, "Service date required"),
  vendorName: z.string().min(1, "Vendor name required"),
  serviceName: z.string().min(1, "Service name required"),
  amountPaid: z.string().min(1, "Amount paid required"),
  reason: z.string().min(1, "Select a reason"),
  detailedReason: z.string().min(10, "Please provide more details"),
  refundMethod: z.enum(["original_payment", "bank_transfer", "wallet_credit"]).optional(),
  bankName: z.string().optional(),
  accountNumber: z.string().optional(),
  ifscCode: z.string().optional(),
  customerName: z.string().min(2, "Name required"),
  customerPhone: z.string().regex(/^\d{10}$/, "Valid 10-digit phone required"),
  customerEmail: z.string().email("Valid email required"),
  acceptTerms: z.boolean().refine((val) => val === true, "You must accept the terms"),
});

const CancellationRefundForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requestType: "cancellation",
      bookingId: "",
      serviceDate: "",
      vendorName: "",
      serviceName: "",
      amountPaid: "",
      reason: "",
      detailedReason: "",
      refundMethod: "original_payment",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      acceptTerms: false,
    },
  });

  const requestType = form.watch("requestType");
  const refundMethod = form.watch("refundMethod");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Request Submitted",
      description: `Your ${values.requestType} request has been submitted. We'll process it within 3-5 business days.`,
    });
    form.reset();
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RotateCcw className="h-5 w-5 text-primary" />
          Cancellation / Refund Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="requestType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Request Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cancellation" id="cancellation" />
                        <label htmlFor="cancellation" className="text-sm">Cancellation</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="refund" id="refund" />
                        <label htmlFor="refund" className="text-sm">Refund Only</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reschedule" id="reschedule" />
                        <label htmlFor="reschedule" className="text-sm">Reschedule</label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="bookingId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Booking ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Booking reference" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Scheduled Service Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vendorName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vendor Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Service provider" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Service booked" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="amountPaid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount Paid (₹)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Total amount paid" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="border-b pb-4">
              <h4 className="font-medium mb-4">Reason for Request</h4>
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Reason</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select reason" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cancellationReasons.map((reason) => (
                          <SelectItem key={reason} value={reason}>{reason}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="detailedReason"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Detailed Explanation</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Please explain in detail..." className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {(requestType === "cancellation" || requestType === "refund") && (
              <div className="border-b pb-4">
                <h4 className="font-medium mb-4">Refund Details</h4>
                <FormField
                  control={form.control}
                  name="refundMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Refund Method</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select refund method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="original_payment">Original Payment Method</SelectItem>
                          <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                          <SelectItem value="wallet_credit">Wallet Credit</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {refundMethod === "bank_transfer" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <FormField
                      control={form.control}
                      name="bankName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bank Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Bank name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="accountNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Account number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ifscCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>IFSC Code</FormLabel>
                          <FormControl>
                            <Input placeholder="IFSC code" className="uppercase" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>
            )}

            <div className="border-b pb-4">
              <h4 className="font-medium mb-4">Contact Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="customerPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit mobile" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    I understand the cancellation/refund policy and agree to the terms
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Submit Request</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CancellationRefundForm;
