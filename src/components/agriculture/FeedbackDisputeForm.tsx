import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const FeedbackDisputeForm = () => {
  const [formData, setFormData] = useState({
    submitterType: "",
    submitterName: "",
    submitterId: "",
    phone: "",
    email: "",
    relatedParty: "",
    relatedPartyName: "",
    transactionId: "",
    contractNumber: "",
    feedbackType: "",
    issueCategory: "",
    issueDescription: "",
    incidentDate: "",
    expectedResolution: "",
    priorityLevel: "",
    evidenceDetails: "",
    mediationRequested: "",
    brokerName: "",
    brokerContact: "",
    mediationNotes: "",
    resolutionStatus: "",
    resolutionDetails: "",
    rating: "",
    additionalComments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback/Dispute:", formData);
    toast.success("Feedback submitted successfully!");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Feedback & Dispute Resolution Form</CardTitle>
        <CardDescription>
          Submit feedback, report issues, or raise disputes for resolution
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Submitter Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Submitter Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="submitterType">I am a *</Label>
                <Select value={formData.submitterType} onValueChange={(value) => handleChange("submitterType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer</SelectItem>
                    <SelectItem value="vendor">Vendor</SelectItem>
                    <SelectItem value="broker">Broker</SelectItem>
                    <SelectItem value="technician">Technician</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="submitterName">Full Name *</Label>
                <Input
                  id="submitterName"
                  value={formData.submitterName}
                  onChange={(e) => handleChange("submitterName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="submitterId">Registration / ID Number</Label>
                <Input
                  id="submitterId"
                  value={formData.submitterId}
                  onChange={(e) => handleChange("submitterId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Related Party */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Related Party Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="relatedParty">Feedback/Dispute Against *</Label>
                <Select value={formData.relatedParty} onValueChange={(value) => handleChange("relatedParty", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select party type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vendor">Vendor</SelectItem>
                    <SelectItem value="broker">Broker</SelectItem>
                    <SelectItem value="farmer">Farmer</SelectItem>
                    <SelectItem value="technician">Technician</SelectItem>
                    <SelectItem value="water_supplier">Water Supplier</SelectItem>
                    <SelectItem value="platform">Platform/System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="relatedPartyName">Party Name *</Label>
                <Input
                  id="relatedPartyName"
                  value={formData.relatedPartyName}
                  onChange={(e) => handleChange("relatedPartyName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transactionId">Transaction / Order ID</Label>
                <Input
                  id="transactionId"
                  value={formData.transactionId}
                  onChange={(e) => handleChange("transactionId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contractNumber">Contract Number (if applicable)</Label>
                <Input
                  id="contractNumber"
                  value={formData.contractNumber}
                  onChange={(e) => handleChange("contractNumber", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Issue Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Issue Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="feedbackType">Feedback Type *</Label>
                <Select value={formData.feedbackType} onValueChange={(value) => handleChange("feedbackType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="positive">Positive Feedback</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                    <SelectItem value="dispute">Dispute</SelectItem>
                    <SelectItem value="suggestion">Suggestion</SelectItem>
                    <SelectItem value="query">Query/Question</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="issueCategory">Issue Category *</Label>
                <Select value={formData.issueCategory} onValueChange={(value) => handleChange("issueCategory", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delivery_delay">Delivery Delay</SelectItem>
                    <SelectItem value="equipment_failure">Equipment Failure</SelectItem>
                    <SelectItem value="water_shortage">Water Shortage</SelectItem>
                    <SelectItem value="quality_issue">Quality Issue</SelectItem>
                    <SelectItem value="pricing_dispute">Pricing Dispute</SelectItem>
                    <SelectItem value="service_issue">Poor Service</SelectItem>
                    <SelectItem value="warranty_issue">Warranty Issue</SelectItem>
                    <SelectItem value="payment_issue">Payment Issue</SelectItem>
                    <SelectItem value="contract_breach">Contract Breach</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="incidentDate">Incident Date</Label>
                <Input
                  id="incidentDate"
                  type="date"
                  value={formData.incidentDate}
                  onChange={(e) => handleChange("incidentDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priorityLevel">Priority Level</Label>
                <Select value={formData.priorityLevel} onValueChange={(value) => handleChange("priorityLevel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="issueDescription">Detailed Description *</Label>
              <Textarea
                id="issueDescription"
                placeholder="Describe the issue in detail..."
                value={formData.issueDescription}
                onChange={(e) => handleChange("issueDescription", e.target.value)}
                required
                className="min-h-32"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expectedResolution">Expected Resolution</Label>
              <Textarea
                id="expectedResolution"
                placeholder="What resolution are you expecting?"
                value={formData.expectedResolution}
                onChange={(e) => handleChange("expectedResolution", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="evidenceDetails">Evidence / Documentation</Label>
              <Textarea
                id="evidenceDetails"
                placeholder="List any photos, documents, or evidence you have..."
                value={formData.evidenceDetails}
                onChange={(e) => handleChange("evidenceDetails", e.target.value)}
              />
            </div>
          </div>

          {/* Mediation Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Broker Mediation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mediationRequested">Request Broker Mediation?</Label>
                <Select value={formData.mediationRequested} onValueChange={(value) => handleChange("mediationRequested", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokerName">Preferred Broker (if any)</Label>
                <Input
                  id="brokerName"
                  value={formData.brokerName}
                  onChange={(e) => handleChange("brokerName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokerContact">Broker Contact</Label>
                <Input
                  id="brokerContact"
                  value={formData.brokerContact}
                  onChange={(e) => handleChange("brokerContact", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mediationNotes">Mediation Notes (for broker use)</Label>
              <Textarea
                id="mediationNotes"
                placeholder="Notes from mediation sessions..."
                value={formData.mediationNotes}
                onChange={(e) => handleChange("mediationNotes", e.target.value)}
              />
            </div>
          </div>

          {/* Resolution Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b pb-2">Resolution Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="resolutionStatus">Current Status</Label>
                <Select value={formData.resolutionStatus} onValueChange={(value) => handleChange("resolutionStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="under_review">Under Review</SelectItem>
                    <SelectItem value="in_mediation">In Mediation</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="escalated">Escalated</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="rating">Overall Rating (if resolved)</Label>
                <Select value={formData.rating} onValueChange={(value) => handleChange("rating", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Rate experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                    <SelectItem value="4">⭐⭐⭐⭐ Good</SelectItem>
                    <SelectItem value="3">⭐⭐⭐ Average</SelectItem>
                    <SelectItem value="2">⭐⭐ Poor</SelectItem>
                    <SelectItem value="1">⭐ Very Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="resolutionDetails">Resolution Details</Label>
              <Textarea
                id="resolutionDetails"
                placeholder="Details of how the issue was resolved..."
                value={formData.resolutionDetails}
                onChange={(e) => handleChange("resolutionDetails", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalComments">Additional Comments</Label>
              <Textarea
                id="additionalComments"
                value={formData.additionalComments}
                onChange={(e) => handleChange("additionalComments", e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Feedback</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackDisputeForm;
