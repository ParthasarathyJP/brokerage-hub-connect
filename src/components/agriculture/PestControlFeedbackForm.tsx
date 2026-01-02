import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const PestControlFeedbackForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    ticketNumber: "",
    submissionDate: "",
    submitterType: "",
    submitterName: "",
    submitterId: "",
    contactNumber: "",
    email: "",
    relatedServiceId: "",
    serviceDate: "",
    issueType: "",
    issueCategory: "",
    issueDescription: "",
    damageAssessment: "",
    evidenceDescription: "",
    expectedResolution: "",
    compensationRequested: "",
    priorityLevel: "",
    assignedTo: "",
    resolutionStatus: "",
    resolutionDate: "",
    resolutionNotes: "",
    brokerMediation: "",
    brokerName: "",
    brokerNotes: "",
    satisfactionRating: "",
    additionalFeedback: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pest Control Feedback/Dispute:", formData);
    toast({
      title: "Feedback Submitted",
      description: "Your feedback/dispute has been recorded. We will review and respond shortly."
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Feedback & Dispute Resolution Form - Pest Control
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Ticket Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Ticket Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ticketNumber">Ticket Number</Label>
                <Input
                  id="ticketNumber"
                  placeholder="Auto-generated"
                  value={formData.ticketNumber}
                  onChange={(e) => handleChange("ticketNumber", e.target.value)}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="submissionDate">Submission Date *</Label>
                <Input
                  id="submissionDate"
                  type="date"
                  value={formData.submissionDate}
                  onChange={(e) => handleChange("submissionDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priorityLevel">Priority Level *</Label>
                <Select onValueChange={(value) => handleChange("priorityLevel", value)}>
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
          </div>

          {/* Submitter Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Submitter Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="submitterType">Submitter Type *</Label>
                <Select onValueChange={(value) => handleChange("submitterType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer</SelectItem>
                    <SelectItem value="vendor">Vendor</SelectItem>
                    <SelectItem value="broker">Broker</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="submitterName">Name *</Label>
                <Input
                  id="submitterName"
                  value={formData.submitterName}
                  onChange={(e) => handleChange("submitterName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="submitterId">ID (Farmer/Vendor/Broker)</Label>
                <Input
                  id="submitterId"
                  value={formData.submitterId}
                  onChange={(e) => handleChange("submitterId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={(e) => handleChange("contactNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Related Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Related Service Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="relatedServiceId">Service/Log ID</Label>
                <Input
                  id="relatedServiceId"
                  value={formData.relatedServiceId}
                  onChange={(e) => handleChange("relatedServiceId", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serviceDate">Service Date</Label>
                <Input
                  id="serviceDate"
                  type="date"
                  value={formData.serviceDate}
                  onChange={(e) => handleChange("serviceDate", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Issue Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Issue Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="issueType">Issue Type *</Label>
                <Select onValueChange={(value) => handleChange("issueType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feedback">General Feedback</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                    <SelectItem value="dispute">Dispute</SelectItem>
                    <SelectItem value="claim">Damage Claim</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="issueCategory">Issue Category *</Label>
                <Select onValueChange={(value) => handleChange("issueCategory", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ineffective-treatment">Ineffective Treatment</SelectItem>
                    <SelectItem value="crop-damage">Crop Damage</SelectItem>
                    <SelectItem value="safety-concerns">Safety Concerns</SelectItem>
                    <SelectItem value="delivery-delay">Delivery Delay</SelectItem>
                    <SelectItem value="overcharging">Overcharging</SelectItem>
                    <SelectItem value="chemical-quality">Chemical Quality Issue</SelectItem>
                    <SelectItem value="technician-behavior">Technician Behavior</SelectItem>
                    <SelectItem value="environmental-damage">Environmental Damage</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="issueDescription">Issue Description *</Label>
              <Textarea
                id="issueDescription"
                placeholder="Describe the issue in detail..."
                value={formData.issueDescription}
                onChange={(e) => handleChange("issueDescription", e.target.value)}
                rows={4}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="damageAssessment">Damage Assessment</Label>
                <Select onValueChange={(value) => handleChange("damageAssessment", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select assessment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Damage</SelectItem>
                    <SelectItem value="minor">Minor Damage</SelectItem>
                    <SelectItem value="moderate">Moderate Damage</SelectItem>
                    <SelectItem value="severe">Severe Damage</SelectItem>
                    <SelectItem value="total-loss">Total Loss</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="compensationRequested">Compensation Requested (₹)</Label>
                <Input
                  id="compensationRequested"
                  type="number"
                  value={formData.compensationRequested}
                  onChange={(e) => handleChange("compensationRequested", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expectedResolution">Expected Resolution</Label>
              <Textarea
                id="expectedResolution"
                placeholder="What resolution do you expect?"
                value={formData.expectedResolution}
                onChange={(e) => handleChange("expectedResolution", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          {/* Evidence Upload */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Evidence & Documents</h3>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
              <p className="text-muted-foreground mb-2">Upload photos, videos, or documents as evidence</p>
              <Input type="file" accept="image/*,video/*,.pdf" multiple className="max-w-xs mx-auto" />
              <p className="text-xs text-muted-foreground mt-2">Supported: Images, Videos, PDF (Max 10MB each)</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="evidenceDescription">Evidence Description</Label>
              <Textarea
                id="evidenceDescription"
                placeholder="Describe the uploaded evidence..."
                value={formData.evidenceDescription}
                onChange={(e) => handleChange("evidenceDescription", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          {/* Resolution Status (for tracking) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Resolution Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="resolutionStatus">Status</Label>
                <Select onValueChange={(value) => handleChange("resolutionStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="under-review">Under Review</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="pending-response">Pending Response</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="assignedTo">Assigned To</Label>
                <Input
                  id="assignedTo"
                  placeholder="Staff/Department name"
                  value={formData.assignedTo}
                  onChange={(e) => handleChange("assignedTo", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resolutionDate">Resolution Date</Label>
                <Input
                  id="resolutionDate"
                  type="date"
                  value={formData.resolutionDate}
                  onChange={(e) => handleChange("resolutionDate", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="resolutionNotes">Resolution Notes</Label>
              <Textarea
                id="resolutionNotes"
                placeholder="Notes on resolution actions taken..."
                value={formData.resolutionNotes}
                onChange={(e) => handleChange("resolutionNotes", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          {/* Broker Mediation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Broker Mediation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brokerMediation">Broker Mediation Required?</Label>
                <Select onValueChange={(value) => handleChange("brokerMediation", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brokerName">Broker Name</Label>
                <Input
                  id="brokerName"
                  value={formData.brokerName}
                  onChange={(e) => handleChange("brokerName", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="brokerNotes">Broker Mediation Notes</Label>
              <Textarea
                id="brokerNotes"
                placeholder="Notes from broker mediation..."
                value={formData.brokerNotes}
                onChange={(e) => handleChange("brokerNotes", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          {/* Satisfaction */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Feedback</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="satisfactionRating">Overall Satisfaction (after resolution)</Label>
                <Select onValueChange={(value) => handleChange("satisfactionRating", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Rate satisfaction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">Excellent (5/5)</SelectItem>
                    <SelectItem value="4">Good (4/5)</SelectItem>
                    <SelectItem value="3">Average (3/5)</SelectItem>
                    <SelectItem value="2">Poor (2/5)</SelectItem>
                    <SelectItem value="1">Very Poor (1/5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalFeedback">Additional Feedback</Label>
              <Textarea
                id="additionalFeedback"
                placeholder="Any additional feedback or suggestions..."
                value={formData.additionalFeedback}
                onChange={(e) => handleChange("additionalFeedback", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">Submit Feedback / Dispute</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PestControlFeedbackForm;
