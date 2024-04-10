import { ContactForm } from "@/components/forms/contact-form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = ({}) => {
    return (
        <div className="grid h-full place-content-center">
            <Card className="mx-auto max-w-[500px]">
                <CardHeader>
                    <CardTitle>Contact Me</CardTitle>
                    <CardDescription>
                        I&apos;d love to hear from you! Send me a message giving
                        me some feedback, or just say hi!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
        </div>
    );
};
export default ContactPage;
