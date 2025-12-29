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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Star, MessageSquare } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  bookingId: z.string().min(1, "Booking ID required"),
  vendorName: z.string().min(1, "Vendor name required"),
  serviceName: z.string().min(1, "Service name required"),
  overallRating: z.number().min(1).max(5),
  qualityRating: z.number().min(1).max(5),
  punctualityRating: z.number().min(1).max(5),
  communicationRating: z.number().min(1).max(5),
  valueRating: z.number().min(1).max(5),
  reviewTitle: z.string().min(3, "Review title required"),
  reviewText: z.string().min(20, "Please provide at least 20 characters"),
  wouldRecommend: z.enum(["yes", "no", "maybe"]),
  pros: z.string().optional(),
  cons: z.string().optional(),
  allowPublic: z.boolean(),
  customerName: z.string().min(2, "Name required"),
  customerEmail: z.string().email("Valid email required"),
});

const StarRating = ({ value, onChange }: { value: number; onChange: (val: number) => void }) => {
  const [hovered, setHovered] = useState(0);
  
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="focus:outline-none"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
        >
          <Star
            className={`h-6 w-6 transition-colors ${
              star <= (hovered || value)
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

const FeedbackRatingForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookingId: "",
      vendorName: "",
      serviceName: "",
      overallRating: 0,
      qualityRating: 0,
      punctualityRating: 0,
      communicationRating: 0,
      valueRating: 0,
      reviewTitle: "",
      reviewText: "",
      wouldRecommend: "yes",
      pros: "",
      cons: "",
      allowPublic: true,
      customerName: "",
      customerEmail: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your valuable feedback!",
    });
    form.reset();
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          Feedback & Rating Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      <Input placeholder="Service availed" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="border-b pb-4">
              <h4 className="font-medium mb-4">Ratings</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="overallRating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Overall Experience</FormLabel>
                      <FormControl>
                        <StarRating value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="qualityRating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Quality</FormLabel>
                      <FormControl>
                        <StarRating value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="punctualityRating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Punctuality</FormLabel>
                      <FormControl>
                        <StarRating value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="communicationRating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Communication</FormLabel>
                      <FormControl>
                        <StarRating value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="valueRating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Value for Money</FormLabel>
                      <FormControl>
                        <StarRating value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="reviewTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Summarize your experience" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reviewText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Share your detailed experience..." className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pros"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What went well? (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Positives..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cons"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Areas for improvement (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Suggestions..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="wouldRecommend"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Would you recommend this vendor?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="rec_yes" />
                        <label htmlFor="rec_yes" className="text-sm">Yes</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maybe" id="rec_maybe" />
                        <label htmlFor="rec_maybe" className="text-sm">Maybe</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="rec_no" />
                        <label htmlFor="rec_no" className="text-sm">No</label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="border-t pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  name="customerEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
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
              name="allowPublic"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Allow this review to be displayed publicly
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Submit Feedback</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FeedbackRatingForm;
