import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const SeedComplianceCertificationForm = () => {
  const [formData, setFormData] = useState({
    applicationType: "",
    applicantName: "",
    companyName: "",
    registrationNumber: "",
    seedCertAgency: "",
    seedLotNumber: "",
    germinationRate: "",
    purityPercentage: "",
    moistureContent: "",
    testDate: "",
    testLabName: "",
    testCertificateNumber: "",
    fertilizerLicenseNumber: "",
    regulatoryComplianceNumber: "",
    validityFrom: "",
    validityTo: "",
    sdsDocumentNumber: "",
    hazardClassification: "",
    handlingInstructions: "",
    emergencyProcedures: "",
    isOrganic: false,
    organicCertBody: "",
    organicCertNumber: "",
    organicValidUntil: "",
    remarks: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Compliance & Certification Form:", formData);
    toast.success("Compliance certification submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Compliance & Certification Form</CardTitle>
        <CardDescription>
          Seed certification, fertilizer license, safety data sheets, and organic certification
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Application Type */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Application Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="applicationType">Certification Type *</Label>
                <Select onValueChange={(value) => setFormData({...formData, applicationType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seed-certification">Seed Certification</SelectItem>
                    <SelectItem value="fertilizer-license">Fertilizer License</SelectItem>
                    <SelectItem value="sds-registration">Safety Data Sheet (SDS)</SelectItem>
                    <SelectItem value="organic-certification">Organic Certification</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="applicantName">Applicant Name *</Label>
                <Input
                  id="applicantName"
                  value={formData.applicantName}
                  onChange={(e) => setFormData({...formData, applicantName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company/Organization</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Seed Certification */}
          {formData.applicationType === "seed-certification" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Seed Certification Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="seedCertAgency">Certifying Agency *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, seedCertAgency: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select agency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nssc">NSSC (National Seed Corporation)</SelectItem>
                      <SelectItem value="ssca">State Seed Certification Agency</SelectItem>
                      <SelectItem value="icar">ICAR Institutes</SelectItem>
                      <SelectItem value="sau">State Agricultural Universities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seedLotNumber">Seed Lot Number *</Label>
                  <Input
                    id="seedLotNumber"
                    value={formData.seedLotNumber}
                    onChange={(e) => setFormData({...formData, seedLotNumber: e.target.value})}
                    required
                  />
                </div>
              </div>
              <h4 className="font-medium mt-4">Germination Test Results</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="germinationRate">Germination Rate (%) *</Label>
                  <Input
                    id="germinationRate"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.germinationRate}
                    onChange={(e) => setFormData({...formData, germinationRate: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="purityPercentage">Purity (%) *</Label>
                  <Input
                    id="purityPercentage"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.purityPercentage}
                    onChange={(e) => setFormData({...formData, purityPercentage: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moistureContent">Moisture Content (%)</Label>
                  <Input
                    id="moistureContent"
                    type="number"
                    value={formData.moistureContent}
                    onChange={(e) => setFormData({...formData, moistureContent: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="testDate">Test Date *</Label>
                  <Input
                    id="testDate"
                    type="date"
                    value={formData.testDate}
                    onChange={(e) => setFormData({...formData, testDate: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="testLabName">Testing Laboratory</Label>
                  <Input
                    id="testLabName"
                    value={formData.testLabName}
                    onChange={(e) => setFormData({...formData, testLabName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="testCertificateNumber">Certificate Number</Label>
                  <Input
                    id="testCertificateNumber"
                    value={formData.testCertificateNumber}
                    onChange={(e) => setFormData({...formData, testCertificateNumber: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Fertilizer License */}
          {formData.applicationType === "fertilizer-license" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Fertilizer License Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fertilizerLicenseNumber">License Number *</Label>
                  <Input
                    id="fertilizerLicenseNumber"
                    value={formData.fertilizerLicenseNumber}
                    onChange={(e) => setFormData({...formData, fertilizerLicenseNumber: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="regulatoryComplianceNumber">Regulatory Compliance No.</Label>
                  <Input
                    id="regulatoryComplianceNumber"
                    value={formData.regulatoryComplianceNumber}
                    onChange={(e) => setFormData({...formData, regulatoryComplianceNumber: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="validityFrom">Valid From *</Label>
                  <Input
                    id="validityFrom"
                    type="date"
                    value={formData.validityFrom}
                    onChange={(e) => setFormData({...formData, validityFrom: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="validityTo">Valid Until *</Label>
                  <Input
                    id="validityTo"
                    type="date"
                    value={formData.validityTo}
                    onChange={(e) => setFormData({...formData, validityTo: e.target.value})}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Safety Data Sheet */}
          {formData.applicationType === "sds-registration" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Safety Data Sheet (SDS) for Chemical Fertilizers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sdsDocumentNumber">SDS Document Number *</Label>
                  <Input
                    id="sdsDocumentNumber"
                    value={formData.sdsDocumentNumber}
                    onChange={(e) => setFormData({...formData, sdsDocumentNumber: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hazardClassification">Hazard Classification</Label>
                  <Select onValueChange={(value) => setFormData({...formData, hazardClassification: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select classification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="non-hazardous">Non-Hazardous</SelectItem>
                      <SelectItem value="low">Low Hazard</SelectItem>
                      <SelectItem value="moderate">Moderate Hazard</SelectItem>
                      <SelectItem value="high">High Hazard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="handlingInstructions">Handling Instructions *</Label>
                <Textarea
                  id="handlingInstructions"
                  value={formData.handlingInstructions}
                  onChange={(e) => setFormData({...formData, handlingInstructions: e.target.value})}
                  placeholder="Safe handling, storage, and usage instructions"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyProcedures">Emergency Procedures</Label>
                <Textarea
                  id="emergencyProcedures"
                  value={formData.emergencyProcedures}
                  onChange={(e) => setFormData({...formData, emergencyProcedures: e.target.value})}
                  placeholder="First aid, spill response, fire fighting measures"
                />
              </div>
            </div>
          )}

          {/* Organic Certification */}
          {formData.applicationType === "organic-certification" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Organic Certification</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="organicCertBody">Certification Body *</Label>
                  <Select onValueChange={(value) => setFormData({...formData, organicCertBody: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select body" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apeda">APEDA (NPOP)</SelectItem>
                      <SelectItem value="fssai-organic">FSSAI Organic</SelectItem>
                      <SelectItem value="indocert">IndoCert</SelectItem>
                      <SelectItem value="ecocert">EcoCert</SelectItem>
                      <SelectItem value="control-union">Control Union</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organicCertNumber">Certificate Number *</Label>
                  <Input
                    id="organicCertNumber"
                    value={formData.organicCertNumber}
                    onChange={(e) => setFormData({...formData, organicCertNumber: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organicValidUntil">Valid Until *</Label>
                  <Input
                    id="organicValidUntil"
                    type="date"
                    value={formData.organicValidUntil}
                    onChange={(e) => setFormData({...formData, organicValidUntil: e.target.value})}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Remarks */}
          <div className="space-y-2">
            <Label htmlFor="remarks">Additional Remarks</Label>
            <Textarea
              id="remarks"
              value={formData.remarks}
              onChange={(e) => setFormData({...formData, remarks: e.target.value})}
              placeholder="Any additional information or notes"
            />
          </div>

          <Button type="submit" className="w-full">Submit Certification Application</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedComplianceCertificationForm;
