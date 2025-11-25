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
import { formatInTimeZone } from 'date-fns-tz';

interface OwnerNotificationEmailProps {
    name: string;
    phone: string;
    email?: string;
    service: string;
    serviceOther?: string;
    comments?: string;
    addressFull?: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    aptNumber?: string;
    gateCode?: string;
    // Tracking data
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmTerm?: string;
    referrer?: string;
    landingPage?: string;
    deviceType?: string;
    browser?: string;
    os?: string;
    userAgent?: string;
    sessionStart?: string;
    formStartTime?: string;
}

export const OwnerNotificationEmail = (props: OwnerNotificationEmailProps) => {
    const {
        name,
        phone,
        email,
        service,
        serviceOther,
        comments,
        addressFull,
        street,
        city,
        state,
        zipCode,
        aptNumber,
        gateCode,
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        utmTerm,
        referrer,
        landingPage,
        deviceType,
        browser,
        os,
        sessionStart,
        formStartTime,
    } = props;

    const serviceName =
        service === 'other'
            ? serviceOther || 'Other Service'
            : service.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    const addressForMap = addressFull || `${street}, ${city}, ${state} ${zipCode}`;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressForMap)}`;

    // Format timestamps in Eastern Time
    const timezone = 'America/New_York';
    const submittedTime = formatInTimeZone(new Date(), timezone, 'EEEE, MMMM d, yyyy \'at\' h:mm a zzz');

    // Calculate session duration if available
    let sessionDuration = '';
    if (sessionStart && formStartTime) {
        const duration = new Date(formStartTime).getTime() - new Date(sessionStart).getTime();
        const minutes = Math.floor(duration / 60000);
        const seconds = Math.floor((duration % 60000) / 1000);
        sessionDuration = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
    }

    // Determine traffic source
    const getTrafficSource = () => {
        if (utmSource) {
            if (utmMedium === 'cpc' || utmMedium === 'ppc') {
                return `💰 Paid (${utmSource})`;
            }
            return `🔗 ${utmSource.charAt(0).toUpperCase() + utmSource.slice(1)}`;
        }
        if (!referrer || referrer === '') return '🔗 Direct';
        try {
            const domain = new URL(referrer).hostname;
            if (domain.includes('google')) return '🔍 Google Organic';
            if (domain.includes('bing')) return '🔍 Bing Organic';
            if (domain.includes('facebook')) return '📘 Facebook';
            if (domain.includes('instagram')) return '📸 Instagram';
            return `🔗 Referral (${domain})`;
        } catch {
            return '🔗 Unknown';
        }
    };

    const trafficSource = getTrafficSource();

    return (
        <Html>
            <Head />
            <Preview>
                New service request from {name} - {serviceName} in {city}, {state}
            </Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header */}
                    <Section style={header}>
                        <Heading style={h1}>🔔 New Lead Alert</Heading>
                        <Text style={timestamp}>{submittedTime}</Text>
                    </Section>

                    {/* Service Info */}
                    <Section style={section}>
                        <Heading as="h2" style={h2}>
                            Service Requested
                        </Heading>
                        <Text style={infoTextLarge}>{serviceName}</Text>
                        {comments && (
                            <>
                                <Heading as="h3" style={h3}>
                                    Customer Notes
                                </Heading>
                                <Text style={commentBox}>{comments}</Text>
                            </>
                        )}
                    </Section>

                    <Hr style={hr} />

                    {/* Customer Info */}
                    <Section style={section}>
                        <Heading as="h2" style={h2}>
                            Customer Information
                        </Heading>
                        <Text style={infoText}>
                            <strong>Name:</strong> {name}
                        </Text>
                        <Text style={infoText}>
                            <strong>Phone:</strong> {phone}
                        </Text>
                        {email && (
                            <Text style={infoText}>
                                <strong>Email:</strong> {email}
                            </Text>
                        )}
                    </Section>

                    <Hr style={hr} />

                    {/* Address Info */}
                    <Section style={section}>
                        <Heading as="h2" style={h2}>
                            Service Address
                        </Heading>
                        <Text style={infoText}>{street}</Text>
                        {aptNumber && <Text style={infoText}>Apt: {aptNumber}</Text>}
                        <Text style={infoText}>
                            {city}, {state} {zipCode}
                        </Text>
                        {gateCode && (
                            <Text style={infoText}>
                                <strong>Gate Code:</strong> {gateCode}
                            </Text>
                        )}
                        <Button style={button} href={mapUrl}>
                            📍 View on Google Maps
                        </Button>
                    </Section>

                    <Hr style={hr} />

                    {/* Lead Source & Tracking */}
                    <Section style={section}>
                        <Heading as="h2" style={h2}>
                            Lead Source & Tracking
                        </Heading>
                        <Text style={infoText}>
                            <strong>Source:</strong> {trafficSource}
                        </Text>
                        {utmCampaign && (
                            <Text style={infoText}>
                                <strong>Campaign:</strong> {utmCampaign}
                            </Text>
                        )}
                        {utmContent && (
                            <Text style={infoText}>
                                <strong>Content:</strong> {utmContent}
                            </Text>
                        )}
                        {utmTerm && (
                            <Text style={infoText}>
                                <strong>Search Term:</strong> {utmTerm}
                            </Text>
                        )}
                        {landingPage && (
                            <Text style={infoTextSmall}>
                                <strong>Landing Page:</strong> {landingPage}
                            </Text>
                        )}
                        {referrer && (
                            <Text style={infoTextSmall}>
                                <strong>Referrer:</strong> {referrer}
                            </Text>
                        )}
                    </Section>

                    <Hr style={hr} />

                    {/* Device & Session Info */}
                    <Section style={section}>
                        <Heading as="h2" style={h2}>
                            Device & Session
                        </Heading>
                        {deviceType && (
                            <Text style={infoText}>
                                <strong>Device:</strong> {deviceType === 'Mobile' ? '📱' : deviceType === 'Tablet' ? '📊' : '💻'} {deviceType}
                            </Text>
                        )}
                        {browser && (
                            <Text style={infoText}>
                                <strong>Browser:</strong> {browser}
                            </Text>
                        )}
                        {os && (
                            <Text style={infoText}>
                                <strong>OS:</strong> {os}
                            </Text>
                        )}
                        {sessionDuration && (
                            <Text style={infoText}>
                                <strong>Time on Site:</strong> {sessionDuration}
                            </Text>
                        )}
                    </Section>

                    <Hr style={hr} />

                    {/* Action Items */}
                    <Section style={section}>
                        <Heading as="h2" style={h2}>
                            Action Items
                        </Heading>
                        <Button style={buttonPrimary} href={`tel:${phone}`}>
                            📞 Call Customer Now
                        </Button>
                        {email && (
                            <Button style={button} href={`mailto:${email}`}>
                                ✉️ Send Email
                            </Button>
                        )}
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            Ez2Fix Garage Door Service
                            <br />
                            Licensed & Insured | NJ License #13VH13553300
                            <br />
                            389 E 54th St, Elmwood Park, NJ 07407
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
    backgroundColor: '#fef3c7',
};

const h1 = {
    color: '#1f2937',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 8px',
    padding: '0',
};

const timestamp = {
    color: '#6b7280',
    fontSize: '14px',
    margin: '0',
};

const section = {
    padding: '24px',
};

const h2 = {
    color: '#1f2937',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 12px',
};

const h3 = {
    color: '#374151',
    fontSize: '16px',
    fontWeight: '600',
    margin: '16px 0 8px',
};

const infoText = {
    color: '#374151',
    fontSize: '14px',
    lineHeight: '24px',
    margin: '4px 0',
};

const infoTextLarge = {
    color: '#1f2937',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '28px',
    margin: '4px 0',
};

const infoTextSmall = {
    color: '#6b7280',
    fontSize: '12px',
    lineHeight: '20px',
    margin: '2px 0',
    wordBreak: 'break-all' as const,
};

const commentBox = {
    backgroundColor: '#f3f4f6',
    borderLeft: '4px solid #f59e0b',
    padding: '12px 16px',
    color: '#1f2937',
    fontSize: '14px',
    lineHeight: '22px',
    margin: '8px 0',
    borderRadius: '4px',
};

const hr = {
    borderColor: '#e5e7eb',
    margin: '0',
};

const button = {
    backgroundColor: '#3b82f6',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '12px 24px',
    margin: '8px 8px 0 0',
};

const buttonPrimary = {
    ...button,
    backgroundColor: '#f59e0b',
    color: '#1f2937',
    fontSize: '16px',
    padding: '14px 32px',
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
};

export default OwnerNotificationEmail;
