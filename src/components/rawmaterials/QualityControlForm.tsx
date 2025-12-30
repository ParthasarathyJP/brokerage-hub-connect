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
  qcNumber: z.string().min(1, "QC number is required"),
  qcDate: z.string().min(1, "QC date is required"),
  grnReference: z.string().min(1, "GRN reference is required"),
  materialName: z.string().min(1, "Material name is required"),
  materialCode: z.string().optional(),
  batchNumber: z.string().min(1, "Batch number is required"),
  sampleSize: z.string().min(1, "Sample size is required"),
  sampleMethod: z.string().min(1, "Sampling method is required"),
  testedBy: z.string().min(1, "Tester name is required"),
  approvedBy: z.string().optional(),
  overallResult: z.string().min(1, "Overall result is required"),
  disposition: z.string().min(1, "Disposition is required"),
  retestRequired: z.boolean().default(false),
  retestDate: z.string().optional(),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface TestParameter {
  id: string;
  parameter: string;
  specification: string;
  actualResult: string;
  unit: string;
  status: string;
}

const QualityControlForm = () => {
  const { toast } = useToast();
  const [testParameters, setTestParameters] = useState<TestParameter[]>([
    {
      id: "1",
      parameter: "",
      specification: "",
      actualResult: "",
      unit: "",
      status: "",
    },
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      qcNumber: `QC-${Date.now().toString().slice(-6)}`,
      qcDate: new Date().toISOString().split("T")[0],
      grnReference: "",
      materialName: "",
      materialCode: "",
      batchNumber: "",
      sampleSize: "",
      sampleMethod: "",
      testedBy: "",
      approvedBy: "",
      overallResult: "",
      disposition: "",
      retestRequired: false,
      retestDate: "",
      remarks: "",
    },
  });

  const addTestParameter = () => {
    setTestParameters([
      ...testParameters,
      {
        id: Date.now().toString(),
        parameter: "",
        specification: "",
        actualResult: "",
        unit: "",
        status: "",
      },
    ]);
  };

  const removeTestParameter = (id: string) => {
    if (testParameters.length > 1) {
      setTestParameters(testParameters.filter((item) => item.id !== id));
    }
  };

  const updateTestParameter = (id: string, field: keyof TestParameter, value: string) => {
    setTestParameters(
      testParameters.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const onSubmit = (data: FormData) => {
    console.log("Quality Control Report:", { ...data, testParameters });
    toast({
      title: "QC Report Created",
      description: `Quality control report ${data.qcNumber} has been submitted.`,
    });
    form.reset();
    setTestParameters([
      {
        id: "1",
        parameter: "",
        specification: "",
        actualResult: "",
        unit: "",
        status: "",
      },
    ]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>QC Report Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="qcNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>QC Report Number</FormLabel>
                  <FormControl>
                    <Input {...field} readOnly className="bg-muted" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="qcDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Test Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Material Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="materialName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Material Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter material name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="materialCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Material Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter material code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="batchNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Batch / Lot Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter batch number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sampleSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sample Size</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 100g, 5 units" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sampleMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sampling Method</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="random">Random Sampling</SelectItem>
                      <SelectItem value="stratified">Stratified Sampling</SelectItem>
                      <SelectItem value="systematic">Systematic Sampling</SelectItem>
                      <SelectItem value="composite">Composite Sampling</SelectItem>
                      <SelectItem value="grab">Grab Sampling</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Test Parameters & Results</CardTitle>
            <Button type="button" variant="outline" size="sm" onClick={addTestParameter}>
              <Plus className="h-4 w-4 mr-2" />
              Add Parameter
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {testParameters.map((param, index) => (
              <div key={param.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">Test {index + 1}</span>
                  {testParameters.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTestParameter(param.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <label className="text-sm font-medium">Parameter</label>
                    <Input
                      placeholder="e.g., Purity, Moisture"
                      value={param.parameter}
                      onChange={(e) =>
                        updateTestParameter(param.id, "parameter", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Specification</label>
                    <Input
                      placeholder="e.g., ≥99.5%"
                      value={param.specification}
                      onChange={(e) =>
                        updateTestParameter(param.id, "specification", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Actual Result</label>
                    <Input
                      placeholder="Enter result"
                      value={param.actualResult}
                      onChange={(e) =>
                        updateTestParameter(param.id, "actualResult", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Unit</label>
                    <Input
                      placeholder="%,ppm,mg/L"
                      value={param.unit}
                      onChange={(e) =>
                        updateTestParameter(param.id, "unit", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Status</label>
                    <select
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={param.status}
                      onChange={(e) =>
                        updateTestParameter(param.id, "status", e.target.value)
                      }
                    >
                      <option value="">Select</option>
                      <option value="pass">Pass</option>
                      <option value="fail">Fail</option>
                      <option value="borderline">Borderline</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>QC Decision</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="overallResult"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overall Result</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select result" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="pass">Pass</SelectItem>
                      <SelectItem value="fail">Fail</SelectItem>
                      <SelectItem value="conditional">Conditional Pass</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="disposition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disposition</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select disposition" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="release">Release for Use</SelectItem>
                      <SelectItem value="hold">Hold for Review</SelectItem>
                      <SelectItem value="reject">Reject</SelectItem>
                      <SelectItem value="rework">Send for Rework</SelectItem>
                      <SelectItem value="return">Return to Supplier</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="testedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tested By</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tester name" {...field} />
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
                  <FormLabel>Approved By (QA Manager)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter approver name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="retestRequired"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Retest Required</FormLabel>
                    <FormDescription>Mark if material needs retesting</FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="retestDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Retest Date (if applicable)</FormLabel>
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
                  <FormLabel>Remarks / Observations</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter any observations or notes" {...field} />
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
          <Button type="submit">Submit QC Report</Button>
        </div>
      </form>
    </Form>
  );
};

export default QualityControlForm;
