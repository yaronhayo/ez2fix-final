import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Hr,
} from '@react-email/components';

interface ClientConfirmationEmailProps {
    name: string;
    phone: string;
    service: string;
    serviceOther?: string;
}

export const ClientConfirmationEmail = (props: ClientConfirmationEmailProps) => {
    const { name, phone, service, serviceOther } = props;

    const serviceName = service === 'other' ? serviceOther || 'Other Service' : service.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

    return (
        <Html>
            <Head />
            <Preview>We've received your service request - Ez2Fix</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header */}
                    <Section style={header}>
                        <Heading style={h1}>Thank You, {name}!</Heading>
                        <Text style={leadText}>
                            We've received your service request and our team will contact you
                            shortly.
                        </Text>
                    </Section>

                    {/* Service Summary */}
                    <Section style={section}>
                        <Heading as="h2" style={h2}>
                            Your Service Request
                        </Heading>
                        <Text style={infoText}>
                            <strong>Service:</strong> {serviceName}
                        </Text>
                        <Text style={infoText}>
                            <strong>Contact:</strong> {phone}
                        </Text>
                    </Section>

                    <Hr style={hr} />

                    {/* What Happens Next */}
                    <Section style={section}>
                        <Heading as="h2" style={h2}>
                            What Happens Next?
                        </Heading>

                        <div style={stepContainer}>
                            <Text style={stepNumber}>1</Text>
                            <div>
                                <Text style={stepTitle}>We Review Your Request</Text>
                                <Text style={stepText}>
                                    Our team is reviewing the details of your service request right now.
                                </Text>
                            </div>
                        </div>

                        <div style={stepContainer}>
                            <Text style={stepNumber}>2</Text>
                            <div>
                                <Text style={stepTitle}>We'll Contact You</Text>
                                <Text style={stepText}>
                                    We'll call or text you at {phone} within the next few hours to
                                    confirm your appointment and provide any additional details.
                                </Text>
                            </div>
                        </div>

                        <div style={stepContainer}>
                            <Text style={stepNumber}>3</Text>
                            <div>
                                <Text style={stepTitle}>We Complete Your Service</Text>
                                <Text style={stepText}>
                                    Our licensed technicians will arrive at your scheduled time to
                                    fix your garage door issue professionally.
                                </Text>
                            </div>
                        </div>
                    </Section>

                    <Hr style={hr} />

                    {/* Trust Signals */}
                    <Section style={trustSection}>
                        <Heading as="h2" style={h2}>
                            Why Choose Ez2Fix?
                        </Heading>
                        <div style={trustGrid}>
                            <div style={trustItem}>
                                <Text style={trustTitle}>Licensed & Insured</Text>
                                <Text style={trustText}>NJ License #13VH13553300</Text>
                            </div>
                            <div style={trustItem}>
                                <Text style={trustTitle}>10-Year Warranty</Text>
                                <Text style={trustText}>On all installations</Text>
                            </div>
                            <div style={trustItem}>
                                <Text style={trustTitle}>5.0★ Rated</Text>
                                <Text style={trustText}>145+ Google reviews</Text>
                            </div>
                        </div>
                    </Section>

                    <Hr style={hr} />

                    {/* Emergency Contact */}
                    <Section style={section}>
                        <Heading as="h2" style={h2}>
                            Need Prompt Help?
                        </Heading>
                        <Text style={infoText}>
                            If your garage door issue is urgent and requires prompt
                            attention, please don't hesitate to call us directly.
                        </Text>
                        <Button style={emergencyButton} href="tel:2015546769">
                            Call (201) 554-6769 - 24/7
                        </Button>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            Ez2Fix Garage Door Service
                            <br />
                            Professional Garage Door Repair & Installation in Northern New Jersey
                            <br />
                            Licensed & Insured | NJ License #13VH13553300
                        </Text>
                        <Text style={privacyText}>
                            We respect your privacy. Your information will not be sold or
                            shared with third parties.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
    maxWidth: '600px',
};

const header = {
    padding: '32px 24px',
    borderBottom: '1px solid #eaeaea',
    textAlign: 'center' as const,
};

const h1 = {
    color: '#1f2937',
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '0 0 12px',
    padding: '0',
};

const leadText = {
    color: '#374151',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0',
};

const section = {
    padding: '24px',
};

const trustSection = {
    padding: '24px',
    backgroundColor: '#fffbeb',
};

const h2 = {
    color: '#1f2937',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 0 16px',
};

const infoText = {
    color: '#374151',
    fontSize: '14px',
    lineHeight: '24px',
    margin: '4px 0',
};

const stepContainer = {
    display: 'flex',
    gap: '16px',
    marginBottom: '20px',
    alignItems: 'flex-start',
};

const stepNumber = {
    backgroundColor: '#f59e0b',
    borderRadius: '50%',
    color: '#1f2937',
    fontSize: '18px',
    fontWeight: 'bold',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    margin: '0',
    padding: '0',
    lineHeight: '40px',
    textAlign: 'center' as const,
};

const stepTitle = {
    color: '#1f2937',
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 4px',
};

const stepText = {
    color: '#6b7280',
    fontSize: '14px',
    lineHeight: '20px',
    margin: '0',
};

const trustGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
};

const trustItem = {
    textAlign: 'center' as const,
};

const trustTitle = {
    color: '#1f2937',
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '0 0 4px',
};

const trustText = {
    color: '#6b7280',
    fontSize: '12px',
    margin: '0',
};

const hr = {
    borderColor: '#e5e7eb',
    margin: '0',
};

const emergencyButton = {
    backgroundColor: '#dc2626',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '14px 32px',
    margin: '16px 0 0',
};

const footer = {
    padding: '24px',
    textAlign: 'center' as const,
    borderTop: '1px solid #eaeaea',
};

const footerText = {
    color: '#6b7280',
    fontSize: '12px',
    lineHeight: '18px',
    margin: '0 0 8px',
};

const privacyText = {
    color: '#9ca3af',
    fontSize: '11px',
    lineHeight: '16px',
    margin: '8px 0 0',
};

export default ClientConfirmationEmail;
