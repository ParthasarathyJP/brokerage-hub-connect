import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2 } from "lucide-react";

const formSchema = z.object({
  returnNumber: z.string().min(1, "Return number is required"),
  returnDate: z.string().min(1, "Return date is required"),
  grnReference: z.string().min(1, "GRN reference is required"),
  poReference: z.string().optional(),
  supplierName: z.string().min(1, "Supplier name is required"),
  supplierContact: z.string().optional(),
  returnType: z.string().min(1, "Return type is required"),
  returnReason: z.string().min(1, "Return reason is required"),
  initiatedBy: z.string().min(1, "Initiator name is required"),
  approvedBy: z.string().optional(),
  pickupDate: z.string().optional(),
  replacementRequested: z.string().optional(),
  creditNoteExpected: z.string().optional(),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LineItem {
  id: string;
  materialName: string;
  materialCode: string;
  batchNumber: string;
  receivedQty: string;
  returnQty: string;
  unit: string;
  defectType: string;
  condition: string;
}

const RawMaterialReturnForm = () => {
  const { toast } = useToast();
  const [lineItems, setLineItems] = useState<LineItem[]>([
    {
      id: "1",
      materialName: "",
      materialCode: "",
      batchNumber: "",
      receivedQty: "",
      returnQty: "",
      unit: "",
      defectType: "",
      condition: "",
    },
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      returnNumber: `RMT-${Date.now().toString().slice(-6)}`,
      returnDate: new Date().toISOString().split("T")[0],
      grnReference: "",
      poReference: "",
      supplierName: "",
      supplierContact: "",
      returnType: "",
      returnReason: "",
      initiatedBy: "",
      approvedBy: "",
      pickupDate: "",
      replacementRequested: "",
      creditNoteExpected: "",
      remarks: "",
    },
  });

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      {
        id: Date.now().toString(),
        materialName: "",
        materialCode: "",
        batchNumber: "",
        receivedQty: "",
        returnQty: "",
        unit: "",
        defectType: "",
        condition: "",
      },
    ]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter((item) => item.id !== id));
    }
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: string) => {
    setLineItems(
      lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const onSubmit = (data: FormData) => {
    console.log("Raw Material Return:", { ...data, lineItems });
    toast({
      title: "Return Initiated",
      description: `Return request ${data.returnNumber} has been submitted.`,
    });
    form.reset();
    setLineItems([
      {
        id: "1",
        materialName: "",
        materialCode: "",
        batchNumber: "",
        receivedQty: "",
        returnQty: "",
        unit: "",
        defectType: "",
        condition: "",
      },
    ]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Return Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="returnNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return Number</FormLabel>
                  <FormControl>
                    <Input {...field} readOnly className="bg-muted" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="returnDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="returnType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="defective">Defective Material</SelectItem>
                      <SelectItem value="wrong-shipment">Wrong Shipment</SelectItem>
                      <SelectItem value="excess">Excess Quantity</SelectItem>
                      <SelectItem value="non-compliant">Non-compliant Specs</SelectItem>
                      <SelectItem value="expired">Expired/Near Expiry</SelectItem>
                      <SelectItem value="damaged">Damaged in Transit</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="grnReference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GRN Reference</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter GRN number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="poReference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PO Reference</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter PO number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Supplier Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="supplierName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter supplier name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="supplierContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier Contact</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone or email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Material Line Items</CardTitle>
            <Button type="button" variant="outline" size="sm" onClick={addLineItem}>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {lineItems.map((item, index) => (
              <div key={item.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">Item {index + 1}</span>
                  {lineItems.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeLineItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium">Material Name</label>
                    <Input
                      placeholder="Enter material name"
                      value={item.materialName}
                      onChange={(e) =>
                        updateLineItem(item.id, "materialName", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Material Code</label>
                    <Input
                      placeholder="Enter code"
                      value={item.materialCode}
                      onChange={(e) =>
                        updateLineItem(item.id, "materialCode", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Batch Number</label>
                    <Input
                      placeholder="Enter batch"
                      value={item.batchNumber}
                      onChange={(e) =>
                        updateLineItem(item.id, "batchNumber", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Unit</label>
                    <Input
                      placeholder="kg, tons, liters"
                      value={item.unit}
                      onChange={(e) =>
                        updateLineItem(item.id, "unit", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Received Qty</label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.receivedQty}
                      onChange={(e) =>
                        updateLineItem(item.id, "receivedQty", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Return Qty</label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={item.returnQty}
                      onChange={(e) =>
                        updateLineItem(item.id, "returnQty", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Defect Type</label>
                    <select
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={item.defectType}
                      onChange={(e) =>
                        updateLineItem(item.id, "defectType", e.target.value)
                      }
                    >
                      <option value="">Select defect</option>
                      <option value="quality">Quality Issue</option>
                      <option value="contamination">Contamination</option>
                      <option value="wrong-grade">Wrong Grade</option>
                      <option value="packaging">Packaging Damage</option>
                      <option value="quantity">Quantity Mismatch</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Condition</label>
                    <select
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={item.condition}
                      onChange={(e) =>
                        updateLineItem(item.id, "condition", e.target.value)
                      }
                    >
                      <option value="">Select condition</option>
                      <option value="usable">Partially Usable</option>
                      <option value="unusable">Completely Unusable</option>
                      <option value="hazardous">Hazardous</option>
                      <option value="salvageable">Salvageable</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Return Resolution</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="returnReason"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Detailed Return Reason</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the issue in detail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="replacementRequested"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Replacement Requested</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="yes">Yes - Full Replacement</SelectItem>
                      <SelectItem value="partial">Yes - Partial Replacement</SelectItem>
                      <SelectItem value="no">No - Credit Only</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="creditNoteExpected"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Credit Note Expected</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="pending">To Be Discussed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pickupDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Pickup Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="initiatedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Initiated By</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="approvedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Approved By</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter approver name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Additional Remarks</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any other notes" {...field} />
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
          <Button type="submit">Submit Return</Button>
        </div>
      </form>
    </Form>
  );
};

export default RawMaterialReturnForm;
