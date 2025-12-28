import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { FileSpreadsheet, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  quotationNumber: z.string().min(1, "Quotation number is required"),
  quotationDate: z.string().min(1, "Date is required"),
  validUntil: z.string().min(1, "Validity date is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Address is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  contactEmail: z.string().email("Valid email required"),
  contactPhone: z.string().min(10, "Valid phone required"),
  clientName: z.string().min(1, "Client name is required"),
  clientAddress: z.string().optional(),
  termsConditions: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LineItem {
  id: string;
  productName: string;
  description: string;
  unit: string;
  moq: string;
  unitPrice: string;
  bulkPrice: string;
  bulkQty: string;
}

const QuotationForm = () => {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: "1", productName: "", description: "", unit: "", moq: "", unitPrice: "", bulkPrice: "", bulkQty: "" }
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quotationNumber: `QT-${Date.now()}`,
      quotationDate: new Date().toISOString().split("T")[0],
      validUntil: "",
      companyName: "",
      companyAddress: "",
      contactPerson: "",
      contactEmail: "",
      contactPhone: "",
      clientName: "",
      clientAddress: "",
      termsConditions: "",
      notes: "",
    },
  });

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: Date.now().toString(), productName: "", description: "", unit: "", moq: "", unitPrice: "", bulkPrice: "", bulkQty: "" }
    ]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter(item => item.id !== id));
    }
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: string) => {
    setLineItems(lineItems.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const onSubmit = (data: FormData) => {
    console.log("Quotation:", { ...data, lineItems });
    toast({
      title: "Quotation Created",
      description: `Quotation ${data.quotationNumber} has been generated.`,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileSpreadsheet className="h-5 w-5 text-primary" />
              Quotation Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="quotationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quotation Number *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quotationDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date *</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="validUntil"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valid Until *</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Your Company</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Full address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="contactPerson"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person *</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone *</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Client Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="clientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client / Company Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Client name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="clientAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Address</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Address (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Price List</CardTitle>
            <Button type="button" variant="outline" size="sm" onClick={addLineItem}>
              <Plus className="h-4 w-4 mr-2" /> Add Item
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lineItems.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 items-end">
                  <div className="col-span-2">
                    <label className="text-sm font-medium">Product</label>
                    <Input
                      placeholder="Product name"
                      value={item.productName}
                      onChange={(e) => updateLineItem(item.id, "productName", e.target.value)}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium">Description</label>
                    <Input
                      placeholder="Brief desc"
                      value={item.description}
                      onChange={(e) => updateLineItem(item.id, "description", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">Unit</label>
                    <Input
                      placeholder="pcs"
                      value={item.unit}
                      onChange={(e) => updateLineItem(item.id, "unit", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">MOQ</label>
                    <Input
                      type="number"
                      placeholder="100"
                      value={item.moq}
                      onChange={(e) => updateLineItem(item.id, "moq", e.target.value)}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium">Unit Price (₹)</label>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={item.unitPrice}
                      onChange={(e) => updateLineItem(item.id, "unitPrice", e.target.value)}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium">Bulk Price (₹)</label>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={item.bulkPrice}
                      onChange={(e) => updateLineItem(item.id, "bulkPrice", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium">Bulk Qty</label>
                    <Input
                      type="number"
                      placeholder="500+"
                      value={item.bulkQty}
                      onChange={(e) => updateLineItem(item.id, "bulkQty", e.target.value)}
                    />
                  </div>
                  <div className="col-span-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeLineItem(item.id)}
                      disabled={lineItems.length === 1}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="termsConditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Terms & Conditions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Payment terms, delivery conditions..." rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any special offers or notes..." rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" className="gradient-primary text-primary-foreground">
            Generate Quotation
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuotationForm;
