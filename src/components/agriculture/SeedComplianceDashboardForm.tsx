import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const SeedComplianceDashboardForm = () => {
  const [formData, setFormData] = useState({
    reportId: "",
    reportDate: "",
    reportingPeriod: "",
    companyName: "",
    companyRegistration: "",
    contactPerson: "",
    contactEmail: "",
    seedLicenseStatus: "",
    seedLicenseExpiry: "",
    fertilizerLicenseStatus: "",
    fertilizerLicenseExpiry: "",
    fssaiStatus: "",
    fssaiExpiry: "",
    gstCompliance: "",
    lastGstFiling: "",
    qualityCertifications: [] as string[],
    lastAuditDate: "",
    nextAuditDate: "",
    auditScore: "",
    auditFindings: "",
    correctiveActions: "",
    pendingSubmissions: "",
    regulatoryNotices: "",
    penaltiesImposed: "",
    appealStatus: "",
    documentationStatus: "",
    trainingCompliance: "",
    safetyCompliance: "",
    environmentalCompliance: "",
    overallComplianceScore: "",
    riskRating: "",
    remarks: ""
  });

  const handleCertificationChange = (cert: string, checked: boolean) => {
    if (checked) {
      setFormData({...formData, qualityCertifications: [...formData.qualityCertifications, cert]});
    } else {
      setFormData({...formData, qualityCertifications: formData.qualityCertifications.filter(c => c !== cert)});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Compliance Dashboard Input:", formData);
    toast.success("Compliance report submitted successfully!");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Compliance Dashboard Input Form</CardTitle>
        <CardDescription>
          Submit audit readiness status and regulatory compliance information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Report Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Report Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="reportId">Report ID</Label>
                <Input
                  id="reportId"
                  value={formData.reportId}
                  onChange={(e) => setFormData({...formData, reportId: e.target.value})}
                  placeholder="Auto-generated"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reportDate">Report Date *</Label>
                <Input
                  id="reportDate"
                  type="date"
                  value={formData.reportDate}
                  onChange={(e) => setFormData({...formData, reportDate: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reportingPeriod">Reporting Period *</Label>
                <Select onValueChange={(value) => setFormData({...formData, reportingPeriod: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="half-yearly">Half-Yearly</SelectItem>
                    <SelectItem value="annual">Annual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyRegistration">Registration Number</Label>
                <Input
                  id="companyRegistration"
                  value={formData.companyRegistration}
                  onChange={(e) => setFormData({...formData, companyRegistration: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* License Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">License & Registration Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="seedLicenseStatus">Seed License Status</Label>
                <Select onValueChange={(value) => setFormData({...formData, seedLicenseStatus: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="valid">Valid</SelectItem>
                    <SelectItem value="expiring-soon">Expiring Soon (within 30 days)</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                    <SelectItem value="renewal-pending">Renewal Pending</SelectItem>
                    <SelectItem value="not-applicable">Not Applicable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="seedLicenseExpiry">Seed License Expiry</Label>
                <Input
                  id="seedLicenseExpiry"
                  type="date"
                  value={formData.seedLicenseExpiry}
                  onChange={(e) => setFormData({...formData, seedLicenseExpiry: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fertilizerLicenseStatus">Fertilizer License Status</Label>
                <Select onValueChange={(value) => setFormData({...formData, fertilizerLicenseStatus: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="valid">Valid</SelectItem>
                    <SelectItem value="expiring-soon">Expiring Soon</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                    <SelectItem value="renewal-pending">Renewal Pending</SelectItem>
                    <SelectItem value="not-applicable">Not Applicable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fertilizerLicenseExpiry">Fertilizer License Expiry</Label>
                <Input
                  id="fertilizerLicenseExpiry"
                  type="date"
                  value={formData.fertilizerLicenseExpiry}
                  onChange={(e) => setFormData({...formData, fertilizerLicenseExpiry: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gstCompliance">GST Compliance Status</Label>
                <Select onValueChange={(value) => setFormData({...formData, gstCompliance: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compliant">Compliant</SelectItem>
                    <SelectItem value="pending">Pending Filing</SelectItem>
                    <SelectItem value="non-compliant">Non-Compliant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastGstFiling">Last GST Filing Date</Label>
                <Input
                  id="lastGstFiling"
                  type="date"
                  value={formData.lastGstFiling}
                  onChange={(e) => setFormData({...formData, lastGstFiling: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Quality Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Quality Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["ISO 9001", "ISO 14001", "FSSAI", "Organic Certification", "BIS", "AGMARK", "GlobalGAP", "HACCP"].map((cert) => (
                <div key={cert} className="flex items-center space-x-2">
                  <Checkbox
                    id={cert}
                    checked={formData.qualityCertifications.includes(cert)}
                    onCheckedChange={(checked) => handleCertificationChange(cert, checked as boolean)}
                  />
                  <Label htmlFor={cert} className="text-sm">{cert}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Audit Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="lastAuditDate">Last Audit Date</Label>
                <Input
                  id="lastAuditDate"
                  type="date"
                  value={formData.lastAuditDate}
                  onChange={(e) => setFormData({...formData, lastAuditDate: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nextAuditDate">Next Audit Due</Label>
                <Input
                  id="nextAuditDate"
                  type="date"
                  value={formData.nextAuditDate}
                  onChange={(e) => setFormData({...formData, nextAuditDate: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="auditScore">Last Audit Score (%)</Label>
                <Input
                  id="auditScore"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.auditScore}
                  onChange={(e) => setFormData({...formData, auditScore: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="auditFindings">Audit Findings</Label>
              <Textarea
                id="auditFindings"
                value={formData.auditFindings}
                onChange={(e) => setFormData({...formData, auditFindings: e.target.value})}
                placeholder="Key findings from the last audit"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="correctiveActions">Corrective Actions Taken</Label>
              <Textarea
                id="correctiveActions"
                value={formData.correctiveActions}
                onChange={(e) => setFormData({...formData, correctiveActions: e.target.value})}
                placeholder="Actions taken to address audit findings"
              />
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Regulatory Compliance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pendingSubmissions">Pending Regulatory Submissions</Label>
                <Textarea
                  id="pendingSubmissions"
                  value={formData.pendingSubmissions}
                  onChange={(e) => setFormData({...formData, pendingSubmissions: e.target.value})}
                  placeholder="List any pending submissions or filings"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="regulatoryNotices">Regulatory Notices Received</Label>
                <Textarea
                  id="regulatoryNotices"
                  value={formData.regulatoryNotices}
                  onChange={(e) => setFormData({...formData, regulatoryNotices: e.target.value})}
                  placeholder="Any notices, warnings, or show-cause"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="safetyCompliance">Safety Compliance</Label>
                <Select onValueChange={(value) => setFormData({...formData, safetyCompliance: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Fully Compliant</SelectItem>
                    <SelectItem value="partial">Partially Compliant</SelectItem>
                    <SelectItem value="non-compliant">Non-Compliant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="environmentalCompliance">Environmental Compliance</Label>
                <Select onValueChange={(value) => setFormData({...formData, environmentalCompliance: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Fully Compliant</SelectItem>
                    <SelectItem value="partial">Partially Compliant</SelectItem>
                    <SelectItem value="non-compliant">Non-Compliant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="riskRating">Overall Risk Rating</Label>
                <Select onValueChange={(value) => setFormData({...formData, riskRating: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low Risk</SelectItem>
                    <SelectItem value="medium">Medium Risk</SelectItem>
                    <SelectItem value="high">High Risk</SelectItem>
                    <SelectItem value="critical">Critical Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Overall Score */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Overall Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="overallComplianceScore">Overall Compliance Score (%)</Label>
                <Input
                  id="overallComplianceScore"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.overallComplianceScore}
                  onChange={(e) => setFormData({...formData, overallComplianceScore: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="remarks">Additional Remarks</Label>
              <Textarea
                id="remarks"
                value={formData.remarks}
                onChange={(e) => setFormData({...formData, remarks: e.target.value})}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Compliance Report</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SeedComplianceDashboardForm;
