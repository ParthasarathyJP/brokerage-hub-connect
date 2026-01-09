import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const GrainQualityAssessmentForm = () => {
  const [formData, setFormData] = useState({
    cropType: "",
    variety: "",
    sampleId: "",
    moistureContent: "",
    foreignMatter: "",
    brokenGrain: "",
    damagedGrain: "",
    immatureGrain: "",
    weevilInfestation: "",
    colorGrade: "",
    odorCheck: "",
    labTestDate: "",
    labName: "",
    labCertificateNumber: "",
    govtGradingReference: "",
    overallGrade: "",
    remarks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Grain Quality Assessment:", formData);
    toast.success("Quality assessment submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Grain Quality Assessment Form</CardTitle>
        <CardDescription>
          Record quality parameters as per FCI/government standards
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sample Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Sample Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type *</Label>
                <Select value={formData.cropType} onValueChange={(value) => handleChange("cropType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="pulses">Pulses</SelectItem>
                    <SelectItem value="millets">Millets</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="variety">Variety</Label>
                <Input
                  id="variety"
                  value={formData.variety}
                  onChange={(e) => handleChange("variety", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sampleId">Sample ID *</Label>
                <Input
                  id="sampleId"
                  value={formData.sampleId}
                  onChange={(e) => handleChange("sampleId", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Quality Parameters */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Quality Parameters (%)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="moistureContent">Moisture Content (%) *</Label>
                <Input
                  id="moistureContent"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 12.5"
                  value={formData.moistureContent}
                  onChange={(e) => handleChange("moistureContent", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="foreignMatter">Foreign Matter (%) *</Label>
                <Input
                  id="foreignMatter"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 1.0"
                  value={formData.foreignMatter}
                  onChange={(e) => handleChange("foreignMatter", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokenGrain">Broken Grain (%) *</Label>
                <Input
                  id="brokenGrain"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 3.0"
                  value={formData.brokenGrain}
                  onChange={(e) => handleChange("brokenGrain", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="damagedGrain">Damaged Grain (%)</Label>
                <Input
                  id="damagedGrain"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 0.5"
                  value={formData.damagedGrain}
                  onChange={(e) => handleChange("damagedGrain", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="immatureGrain">Immature/Shriveled (%)</Label>
                <Input
                  id="immatureGrain"
                  type="number"
                  step="0.1"
                  value={formData.immatureGrain}
                  onChange={(e) => handleChange("immatureGrain", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weevilInfestation">Weevil Infestation</Label>
                <Select value={formData.weevilInfestation} onValueChange={(value) => handleChange("weevilInfestation", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nil">Nil</SelectItem>
                    <SelectItem value="slight">Slight</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="heavy">Heavy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="colorGrade">Color Grade</Label>
                <Select value={formData.colorGrade} onValueChange={(value) => handleChange("colorGrade", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select color grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="natural">Natural</SelectItem>
                    <SelectItem value="slightly-dull">Slightly Dull</SelectItem>
                    <SelectItem value="dull">Dull</SelectItem>
                    <SelectItem value="discolored">Discolored</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="odorCheck">Odor Check</Label>
                <Select value={formData.odorCheck} onValueChange={(value) => handleChange("odorCheck", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select odor status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal/Natural</SelectItem>
                    <SelectItem value="musty">Musty</SelectItem>
                    <SelectItem value="off-odor">Off-Odor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Lab Certificate Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Lab Test Certificate</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="labTestDate">Lab Test Date</Label>
                <Input
                  id="labTestDate"
                  type="date"
                  value={formData.labTestDate}
                  onChange={(e) => handleChange("labTestDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="labName">Lab Name</Label>
                <Input
                  id="labName"
                  value={formData.labName}
                  onChange={(e) => handleChange("labName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="labCertificateNumber">Certificate Number</Label>
                <Input
                  id="labCertificateNumber"
                  value={formData.labCertificateNumber}
                  onChange={(e) => handleChange("labCertificateNumber", e.target.value)}
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Upload lab test certificates separately</p>
          </div>

          {/* Government Grading */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Government Grading Reference</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="govtGradingReference">FCI/State Standard Reference</Label>
                <Input
                  id="govtGradingReference"
                  placeholder="e.g., FCI FAQ Wheat Standards 2024"
                  value={formData.govtGradingReference}
                  onChange={(e) => handleChange("govtGradingReference", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="overallGrade">Overall Grade Assigned *</Label>
                <Select value={formData.overallGrade} onValueChange={(value) => handleChange("overallGrade", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select overall grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade-a">Grade A (Premium)</SelectItem>
                    <SelectItem value="grade-b">Grade B (Standard)</SelectItem>
                    <SelectItem value="grade-c">Grade C (Economy)</SelectItem>
                    <SelectItem value="faq">FAQ</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="remarks">Remarks / Observations</Label>
            <Textarea
              id="remarks"
              placeholder="Additional observations about grain quality..."
              value={formData.remarks}
              onChange={(e) => handleChange("remarks", e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">Submit Assessment</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GrainQualityAssessmentForm;
