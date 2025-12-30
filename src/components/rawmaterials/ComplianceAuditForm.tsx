import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
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
  auditNumber: z.string().min(1, "Audit number is required"),
  auditDate: z.string().min(1, "Audit date is required"),
  auditType: z.string().min(1, "Audit type is required"),
  industry: z.string().min(1, "Industry is required"),
  facilityName: z.string().min(1, "Facility name is required"),
  facilityLocation: z.string().min(1, "Facility location is required"),
  auditorName: z.string().min(1, "Auditor name is required"),
  auditorOrganization: z.string().optional(),
  previousAuditDate: z.string().optional(),
  previousAuditScore: z.string().optional(),
  documentationComplete: z.boolean().default(false),
  safetyProtocolsMet: z.boolean().default(false),
  storageCompliant: z.boolean().default(false),
  handlingProcedures: z.boolean().default(false),
  traceabilityMaintained: z.boolean().default(false),
  wasteDisposalCompliant: z.boolean().default(false),
  overallScore: z.string().optional(),
  overallStatus: z.string().min(1, "Status is required"),
  correctiveActions: z.string().optional(),
  nextAuditDate: z.string().optional(),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ChecklistItem {
  id: string;
  category: string;
  requirement: string;
  status: string;
  evidence: string;
  remarks: string;
}

const ComplianceAuditForm = () => {
  const { toast } = useToast();
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    {
      id: "1",
      category: "",
      requirement: "",
      status: "",
      evidence: "",
      remarks: "",
    },
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      auditNumber: `CAF-${Date.now().toString().slice(-6)}`,
      auditDate: new Date().toISOString().split("T")[0],
      auditType: "",
      industry: "",
      facilityName: "",
      facilityLocation: "",
      auditorName: "",
      auditorOrganization: "",
      previousAuditDate: "",
      previousAuditScore: "",
      documentationComplete: false,
      safetyProtocolsMet: false,
      storageCompliant: false,
      handlingProcedures: false,
      traceabilityMaintained: false,
      wasteDisposalCompliant: false,
      overallScore: "",
      overallStatus: "",
      correctiveActions: "",
      nextAuditDate: "",
      remarks: "",
    },
  });

  const addChecklistItem = () => {
    setChecklistItems([
      ...checklistItems,
      {
        id: Date.now().toString(),
        category: "",
        requirement: "",
        status: "",
        evidence: "",
        remarks: "",
      },
    ]);
  };

  const removeChecklistItem = (id: string) => {
    if (checklistItems.length > 1) {
      setChecklistItems(checklistItems.filter((item) => item.id !== id));
    }
  };

  const updateChecklistItem = (id: string, field: keyof ChecklistItem, value: string) => {
    setChecklistItems(
      checklistItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const onSubmit = (data: FormData) => {
    console.log("Compliance Audit:", { ...data, checklistItems });
    toast({
      title: "Audit Report Submitted",
      description: `Compliance audit ${data.auditNumber} has been recorded.`,
    });
    form.reset();
    setChecklistItems([
      {
        id: "1",
        category: "",
        requirement: "",
        status: "",
        evidence: "",
        remarks: "",
      },
    ]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Audit Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="auditNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Audit Number</FormLabel>
                  <FormControl>
                    <Input {...field} readOnly className="bg-muted" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="auditDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Audit Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="auditType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Audit Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="internal">Internal Audit</SelectItem>
                      <SelectItem value="external">External Audit</SelectItem>
                      <SelectItem value="regulatory">Regulatory Audit</SelectItem>
                      <SelectItem value="supplier">Supplier Audit</SelectItem>
                      <SelectItem value="certification">Certification Audit</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="pharma">Pharmaceuticals</SelectItem>
                      <SelectItem value="food">Food & Beverage</SelectItem>
                      <SelectItem value="chemicals">Chemicals</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="textiles">Textiles</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="facilityName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facility Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter facility name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="facilityLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facility Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Auditor Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="auditorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Auditor Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter auditor name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="auditorOrganization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Auditor Organization</FormLabel>
                  <FormControl>
                    <Input placeholder="Audit firm / Internal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="previousAuditDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Previous Audit Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="previousAuditScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Previous Audit Score</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 85%" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="documentationComplete"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Documentation Complete</FormLabel>
                      <FormDescription>All required documents are available and current</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="safetyProtocolsMet"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Safety Protocols Met</FormLabel>
                      <FormDescription>MSDS, safety training, PPE requirements</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="storageCompliant"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Storage Compliant</FormLabel>
                      <FormDescription>Proper storage conditions maintained</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="handlingProcedures"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Handling Procedures</FormLabel>
                      <FormDescription>SOPs for material handling in place</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="traceabilityMaintained"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Traceability Maintained</FormLabel>
                      <FormDescription>Batch tracking and lot management</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="wasteDisposalCompliant"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Waste Disposal Compliant</FormLabel>
                      <FormDescription>Proper disposal procedures followed</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Detailed Checklist Items</CardTitle>
            <Button type="button" variant="outline" size="sm" onClick={addChecklistItem}>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {checklistItems.map((item, index) => (
              <div key={item.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">Checklist Item {index + 1}</span>
                  {checklistItems.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeChecklistItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <select
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={item.category}
                      onChange={(e) =>
                        updateChecklistItem(item.id, "category", e.target.value)
                      }
                    >
                      <option value="">Select category</option>
                      <option value="documentation">Documentation</option>
                      <option value="safety">Safety</option>
                      <option value="quality">Quality</option>
                      <option value="storage">Storage</option>
                      <option value="handling">Handling</option>
                      <option value="environment">Environmental</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">Requirement</label>
                    <Input
                      placeholder="Describe the requirement"
                      value={item.requirement}
                      onChange={(e) =>
                        updateChecklistItem(item.id, "requirement", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Status</label>
                    <select
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={item.status}
                      onChange={(e) =>
                        updateChecklistItem(item.id, "status", e.target.value)
                      }
                    >
                      <option value="">Select status</option>
                      <option value="compliant">Compliant</option>
                      <option value="non-compliant">Non-Compliant</option>
                      <option value="partial">Partially Compliant</option>
                      <option value="na">Not Applicable</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Evidence</label>
                    <Input
                      placeholder="Document reference"
                      value={item.evidence}
                      onChange={(e) =>
                        updateChecklistItem(item.id, "evidence", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Remarks</label>
                    <Input
                      placeholder="Observations"
                      value={item.remarks}
                      onChange={(e) =>
                        updateChecklistItem(item.id, "remarks", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Audit Outcome</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="overallScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overall Score</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 92%" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="overallStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overall Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="pass">Pass</SelectItem>
                      <SelectItem value="conditional">Conditional Pass</SelectItem>
                      <SelectItem value="fail">Fail</SelectItem>
                      <SelectItem value="improvement">Needs Improvement</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="correctiveActions"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Corrective Actions Required</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List required corrective actions" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nextAuditDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Next Audit Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
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
                  <FormLabel>Final Remarks</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any additional observations" {...field} />
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
          <Button type="submit">Submit Audit Report</Button>
        </div>
      </form>
    </Form>
  );
};

export default ComplianceAuditForm;
