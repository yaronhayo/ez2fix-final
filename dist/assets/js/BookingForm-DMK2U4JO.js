import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React__default, { useRef, useState, useEffect, useId } from "react";
import { UAParser } from "ua-parser-js";
import { I as Icon } from "./Footer-DAxRJj5_.js";
function useGooglePlaces({ onPlaceSelect }) {
  const inputRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  useEffect(() => {
    const loadScript = () => {
      if (window.google?.maps?.places) {
        setScriptLoaded(true);
        return;
      }
      const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
      if (existingScript) {
        const checkLoaded = setInterval(() => {
          if (window.google?.maps?.places) {
            setScriptLoaded(true);
            clearInterval(checkLoaded);
          }
        }, 100);
        return;
      }
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${"AIzaSyCC7AYmLnyP7XLdADdhYFpzRRjiCqmlkhw"}&libraries=places&loading=async`;
      script.async = true;
      script.defer = true;
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    };
    loadScript();
  }, []);
  useEffect(() => {
    if (!scriptLoaded || !inputRef.current) return;
    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "us" },
      fields: ["address_components", "formatted_address"],
      types: ["address"]
    });
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.address_components) return;
      let streetNumber = "";
      let route = "";
      let city = "";
      let state = "";
      let zipCode = "";
      for (const component of place.address_components) {
        const type = component.types[0];
        switch (type) {
          case "street_number":
            streetNumber = component.long_name;
            break;
          case "route":
            route = component.short_name;
            break;
          case "locality":
            city = component.long_name;
            break;
          case "administrative_area_level_1":
            state = component.short_name;
            break;
          case "postal_code":
            zipCode = component.long_name;
            break;
        }
      }
      onPlaceSelect({
        street: `${streetNumber} ${route}`.trim(),
        city,
        state,
        zipCode
      });
    });
  }, [scriptLoaded, onPlaceSelect]);
  return { inputRef, scriptLoaded };
}
const useUTMTracking = () => {
  const [trackingData, setTrackingData] = useState({
    utmParams: {},
    referrer: "",
    landingPage: "",
    sessionStart: (/* @__PURE__ */ new Date()).toISOString()
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {
      utm_source: urlParams.get("utm_source") || void 0,
      utm_medium: urlParams.get("utm_medium") || void 0,
      utm_campaign: urlParams.get("utm_campaign") || void 0,
      utm_content: urlParams.get("utm_content") || void 0,
      utm_term: urlParams.get("utm_term") || void 0
    };
    const storedUTM = sessionStorage.getItem("ez2fix_utm");
    const storedReferrer = sessionStorage.getItem("ez2fix_referrer");
    const storedLanding = sessionStorage.getItem("ez2fix_landing");
    const storedSessionStart = sessionStorage.getItem("ez2fix_session_start");
    const finalUTM = storedUTM ? JSON.parse(storedUTM) : utmParams;
    const finalReferrer = storedReferrer || document.referrer;
    const finalLanding = storedLanding || window.location.href;
    const finalSessionStart = storedSessionStart || (/* @__PURE__ */ new Date()).toISOString();
    if (!storedUTM) sessionStorage.setItem("ez2fix_utm", JSON.stringify(finalUTM));
    if (!storedReferrer) sessionStorage.setItem("ez2fix_referrer", finalReferrer);
    if (!storedLanding) sessionStorage.setItem("ez2fix_landing", finalLanding);
    if (!storedSessionStart) sessionStorage.setItem("ez2fix_session_start", finalSessionStart);
    setTrackingData({
      utmParams: finalUTM,
      referrer: finalReferrer,
      landingPage: finalLanding,
      sessionStart: finalSessionStart
    });
  }, []);
  return trackingData;
};
const useDeviceDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    deviceType: "Desktop",
    browser: "Unknown",
    browserVersion: "",
    os: "Unknown",
    osVersion: "",
    userAgent: ""
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const parser = new UAParser();
    const result = parser.getResult();
    const deviceType = result.device.type ? result.device.type.charAt(0).toUpperCase() + result.device.type.slice(1) : "Desktop";
    setDeviceInfo({
      deviceType,
      browser: result.browser.name || "Unknown",
      browserVersion: result.browser.version || "",
      os: result.os.name || "Unknown",
      osVersion: result.os.version || "",
      userAgent: navigator.userAgent
    });
  }, []);
  return deviceInfo;
};
const SERVICES = [
  { id: "emergency-repair", name: "Emergency Repair" },
  { id: "spring-repair", name: "Spring Repair" },
  { id: "opener-installation", name: "Opener Installation" },
  { id: "door-installation", name: "Door Installation" },
  { id: "opener-repair", name: "Opener Repair" },
  { id: "cable-repair", name: "Cable Repair" },
  { id: "panel-replacement", name: "Panel Replacement" },
  { id: "track-repair", name: "Track Repair" },
  { id: "commercial", name: "Commercial Garage Door" },
  { id: "other", name: "Other" }
];
class ErrorBoundary extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("BookingForm Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxs("div", { className: "p-6 text-center bg-red-50 rounded-xl border border-red-200", children: [
        /* @__PURE__ */ jsx(Icon, { name: "alertTriangle", className: "w-12 h-12 text-red-500 mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-red-800 mb-2", children: "Something went wrong" }),
        /* @__PURE__ */ jsx("p", { className: "text-red-600 mb-4", children: "We're having trouble loading the booking form. Please try refreshing the page." }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:2015546769",
            className: "inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors",
            children: [
              /* @__PURE__ */ jsx(Icon, { name: "phone", className: "w-5 h-5 mr-2" }),
              "Call (201) 554-6769"
            ]
          }
        )
      ] });
    }
    return this.props.children;
  }
}
function BookingForm() {
  return /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsx(BookingFormContent, {}) });
}
function BookingFormContent() {
  const formId = useId();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    consentToContact: false,
    agreedToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const trackingData = useUTMTracking();
  const deviceInfo = useDeviceDetection();
  useEffect(() => {
    const formStartTime = (/* @__PURE__ */ new Date()).toISOString();
    setFormData((prev) => ({
      ...prev,
      utmSource: trackingData.utmParams.utm_source,
      utmMedium: trackingData.utmParams.utm_medium,
      utmCampaign: trackingData.utmParams.utm_campaign,
      utmContent: trackingData.utmParams.utm_content,
      utmTerm: trackingData.utmParams.utm_term,
      referrer: trackingData.referrer,
      landingPage: trackingData.landingPage,
      deviceType: deviceInfo.deviceType,
      browser: `${deviceInfo.browser} ${deviceInfo.browserVersion}`,
      os: `${deviceInfo.os} ${deviceInfo.osVersion}`,
      userAgent: deviceInfo.userAgent,
      sessionStart: trackingData.sessionStart,
      formStartTime
    }));
  }, [trackingData, deviceInfo]);
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };
  const { inputRef } = useGooglePlaces({
    onPlaceSelect: (address) => {
      setFormData((prev) => ({
        ...prev,
        addressFull: `${address.street}, ${address.city}, ${address.state} ${address.zipCode}`,
        street: address.street,
        city: address.city,
        state: address.state || "NJ",
        zipCode: address.zipCode
      }));
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.address;
        return newErrors;
      });
    }
  });
  const validateStep = (step) => {
    const newErrors = {};
    switch (step) {
      case 0:
        if (!formData.service) {
          newErrors.service = "Please select a service";
        }
        if (formData.service === "other" && !formData.serviceOther?.trim()) {
          newErrors.serviceOther = "Please describe the service you need";
        }
        break;
      case 1:
        if (!formData.street?.trim()) {
          newErrors.address = "Please select an address from the dropdown";
        }
        if (!formData.city?.trim()) {
          newErrors.city = "City is required";
        }
        if (!formData.zipCode || !/^\d{5}$/.test(formData.zipCode)) {
          newErrors.zipCode = "Valid 5-digit ZIP code is required";
        }
        break;
      case 2:
        if (!formData.name?.trim()) {
          newErrors.name = "Name is required";
        }
        if (!formData.phone || !/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ""))) {
          newErrors.phone = "Valid 10-digit phone number is required";
        }
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Valid email address required";
        }
        if (!formData.consentToContact) {
          newErrors.consentToContact = "Please agree to be contacted";
        }
        if (!formData.agreedToTerms) {
          newErrors.agreedToTerms = "Please agree to Privacy Policy and Terms";
        }
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  const handleSubmit = async () => {
    if (!validateStep(currentStep)) {
      return;
    }
    setIsSubmitting(true);
    try {
      let token = "";
      try {
        if (typeof window !== "undefined" && window.grecaptcha) {
          token = await window.grecaptcha.execute(
            "6LdFn6krAAAAAJXaiq0hr8p3fTd4L9RQr5p0giwR",
            { action: "booking" }
          );
        } else {
          console.warn("reCAPTCHA not loaded, proceeding without token");
        }
      } catch (recaptchaError) {
        console.error("reCAPTCHA error:", recaptchaError);
      }
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token })
      });
      if (!response.ok) {
        const data = await response.json();
        console.error("Server error:", data);
        setErrors({ submit: data.message || "Submission failed. Please try again." });
      } else {
        const data = await response.json();
        if (data.success && data.redirectUrl) {
          window.location.href = data.redirectUrl;
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrors({ submit: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };
  const canProceedFromStep = (step) => {
    switch (step) {
      case 0:
        if (!formData.service) return false;
        if (formData.service === "other" && !formData.serviceOther?.trim()) return false;
        return true;
      case 1:
        if (!formData.street?.trim()) return false;
        if (!formData.city?.trim()) return false;
        if (!formData.zipCode || !/^\d{5}$/.test(formData.zipCode)) return false;
        return true;
      case 2:
        if (!formData.name?.trim()) return false;
        if (!formData.phone || !/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ""))) return false;
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
        if (!formData.consentToContact) return false;
        if (!formData.agreedToTerms) return false;
        return true;
      default:
        return false;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-between mb-2", children: ["Service", "Address", "Contact"].map((step, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: `flex-1 text-center text-xs font-medium ${index <= currentStep ? "text-gold-400" : "text-cream-400/50"}`,
          children: step
        },
        step
      )) }),
      /* @__PURE__ */ jsx("div", { className: "h-2 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full bg-gold-400 transition-all duration-300",
          style: { width: `${(currentStep + 1) / 3 * 100}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-4 border border-cream-300", children: [
      currentStep === 0 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-dark-900 mb-4", children: "Select Your Service" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-service`, className: "block text-sm font-semibold text-dark-900 mb-2", children: "What service do you need? *" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: `${formId}-service`,
              name: "service",
              value: formData.service || "",
              onChange: (e) => updateField("service", e.target.value),
              className: `w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 ${errors.service ? "border-red-500" : "border-cream-300"}`,
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Choose a service..." }),
                SERVICES.map((service) => /* @__PURE__ */ jsx("option", { value: service.id, children: service.name }, service.id))
              ]
            }
          ),
          errors.service && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.service })
        ] }),
        formData.service === "other" && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-serviceOther`, className: "block text-sm font-semibold text-dark-900 mb-2", children: "Please describe the service you need *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: `${formId}-serviceOther`,
              name: "serviceOther",
              value: formData.serviceOther || "",
              onChange: (e) => updateField("serviceOther", e.target.value),
              placeholder: "e.g., Custom garage door design",
              className: `w-full px-4 py-3 border-2 rounded-lg ${errors.serviceOther ? "border-red-500" : "border-cream-300"}`
            }
          ),
          errors.serviceOther && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.serviceOther })
        ] }),
        formData.service && /* @__PURE__ */ jsxs("div", { className: "mb-6 animate-fade-in", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-comments`, className: "block text-sm font-semibold text-dark-900 mb-2", children: "Additional details (optional)" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: `${formId}-comments`,
              name: "comments",
              rows: 4,
              value: formData.comments || "",
              onChange: (e) => updateField("comments", e.target.value),
              placeholder: "Any additional information that might help us serve you better...",
              className: "w-full px-4 py-3 border-2 border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
            }
          )
        ] })
      ] }),
      currentStep === 1 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-dark-900 mb-4", children: "Service Address" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-address`, className: "block text-sm font-semibold text-dark-900 mb-2", children: "Service Address *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: `${formId}-address`,
              name: "address",
              ref: inputRef,
              placeholder: "Start typing your address...",
              autoComplete: "street-address",
              className: `w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 ${errors.address ? "border-red-500" : "border-cream-300"}`
            }
          ),
          errors.address && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.address }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-dark-500 mt-1", children: "Start typing and select from the dropdown" })
        ] }),
        formData.street && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-street`, className: "block text-xs font-medium text-dark-700 mb-1", children: "Street" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: `${formId}-street`,
                name: "street",
                value: formData.street,
                readOnly: true,
                className: "w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-lg text-dark-600 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-city`, className: "block text-xs font-medium text-dark-700 mb-1", children: "City" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: `${formId}-city`,
                name: "city",
                value: formData.city,
                readOnly: true,
                className: "w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-lg text-dark-600 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-state`, className: "block text-xs font-medium text-dark-700 mb-1", children: "State" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: `${formId}-state`,
                name: "state",
                value: formData.state || "NJ",
                readOnly: true,
                className: "w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-lg text-dark-600 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-zipCode`, className: "block text-xs font-medium text-dark-700 mb-1", children: "ZIP Code" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: `${formId}-zipCode`,
                name: "zipCode",
                value: formData.zipCode,
                readOnly: true,
                className: "w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-lg text-dark-600 text-sm"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-aptNumber`, className: "block text-sm font-medium text-dark-700 mb-1", children: "Apt # (optional)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: `${formId}-aptNumber`,
                name: "aptNumber",
                value: formData.aptNumber || "",
                onChange: (e) => updateField("aptNumber", e.target.value),
                placeholder: "Apt, Unit",
                autoComplete: "address-line2",
                className: "w-full px-3 py-2 border-2 border-cream-300 rounded-lg text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-gateCode`, className: "block text-sm font-medium text-dark-700 mb-1", children: "Gate Code (optional)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: `${formId}-gateCode`,
                name: "gateCode",
                value: formData.gateCode || "",
                onChange: (e) => updateField("gateCode", e.target.value),
                placeholder: "Gate code",
                className: "w-full px-3 py-2 border-2 border-cream-300 rounded-lg text-sm"
              }
            )
          ] })
        ] })
      ] }),
      currentStep === 2 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-dark-900 mb-4", children: "Contact Information" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-name`, className: "block text-sm font-semibold text-dark-900 mb-2", children: "Your Name *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: `${formId}-name`,
              name: "name",
              value: formData.name || "",
              onChange: (e) => updateField("name", e.target.value),
              placeholder: "John Smith",
              autoComplete: "name",
              className: `w-full px-4 py-3 border-2 rounded-lg ${errors.name ? "border-red-500" : "border-cream-300"}`
            }
          ),
          errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-phone`, className: "block text-sm font-semibold text-dark-900 mb-2", children: "Phone Number *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              id: `${formId}-phone`,
              name: "phone",
              value: formData.phone || "",
              onChange: (e) => updateField("phone", e.target.value),
              placeholder: "(201) 555-1234",
              autoComplete: "tel",
              className: `w-full px-4 py-3 border-2 rounded-lg ${errors.phone ? "border-red-500" : "border-cream-300"}`
            }
          ),
          errors.phone && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.phone })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-email`, className: "block text-sm font-medium text-dark-700 mb-2", children: "Email (optional)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: `${formId}-email`,
              name: "email",
              value: formData.email || "",
              onChange: (e) => updateField("email", e.target.value),
              placeholder: "your@email.com",
              autoComplete: "email",
              className: `w-full px-4 py-3 border-2 rounded-lg ${errors.email ? "border-red-500" : "border-cream-300"}`
            }
          ),
          errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-4", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: `${formId}-consentToContact`, className: "flex items-start", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                id: `${formId}-consentToContact`,
                name: "consentToContact",
                checked: formData.consentToContact || false,
                onChange: (e) => updateField("consentToContact", e.target.checked),
                className: "w-5 h-5 text-gold-500 mt-0.5 rounded focus:ring-gold-400"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "ml-3 text-sm text-dark-700", children: "I agree to be contacted via phone, email, or SMS regarding my service request *" })
          ] }),
          errors.consentToContact && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm ml-8", children: errors.consentToContact }),
          /* @__PURE__ */ jsxs("label", { htmlFor: `${formId}-agreedToTerms`, className: "flex items-start", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                id: `${formId}-agreedToTerms`,
                name: "agreedToTerms",
                checked: formData.agreedToTerms || false,
                onChange: (e) => updateField("agreedToTerms", e.target.checked),
                className: "w-5 h-5 text-gold-500 mt-0.5 rounded focus:ring-gold-400"
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "ml-3 text-sm text-dark-700", children: [
              "I agree to the",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/privacy-policy",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gold-600 hover:text-gold-700 underline",
                  children: "Privacy Policy"
                }
              ),
              " ",
              "and",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/terms-of-service",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-gold-600 hover:text-gold-700 underline",
                  children: "Terms & Conditions"
                }
              ),
              " ",
              "*"
            ] })
          ] }),
          errors.agreedToTerms && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm ml-8", children: errors.agreedToTerms })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-cream-100 border border-gold-200 rounded-lg p-4 text-sm text-dark-600 mb-4", children: "🔒 We respect your privacy. Your information will not be sold or shared with third parties." }),
        errors.submit && /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-4 font-semibold", children: [
          "⚠️ ",
          errors.submit
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "opacity-0 absolute top-0 left-0 h-0 w-0 overflow-hidden z-[-1]", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: `${formId}-fax`, children: "Fax Number" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: `${formId}-fax`,
            name: "fax",
            tabIndex: -1,
            autoComplete: "off",
            value: formData.fax || "",
            onChange: (e) => updateField("fax", e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-8 pt-6 border-t border-cream-300", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            id: `${formId}-prev-btn`,
            name: "prev-btn",
            onClick: prevStep,
            disabled: currentStep === 0,
            className: `flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${currentStep === 0 ? "bg-cream-200 text-dark-400 cursor-not-allowed" : "bg-cream-300 text-dark-900 hover:bg-cream-400"}`,
            children: [
              /* @__PURE__ */ jsx(Icon, { name: "chevronLeft", className: "w-5 h-5 mr-2" }),
              "Previous"
            ]
          }
        ),
        currentStep < 2 ? /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            id: `${formId}-next-btn`,
            name: "next-btn",
            onClick: nextStep,
            className: "flex items-center px-6 py-3 rounded-lg font-semibold transition-colors bg-gold-500 text-dark-900 hover:bg-gold-600",
            children: [
              "Continue",
              /* @__PURE__ */ jsx(Icon, { name: "chevronRight", className: "w-5 h-5 ml-2" })
            ]
          }
        ) : /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            id: `${formId}-submit-btn`,
            name: "submit-btn",
            onClick: handleSubmit,
            disabled: isSubmitting || !canProceedFromStep(2),
            className: `flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${isSubmitting || !canProceedFromStep(2) ? "bg-dark-300 text-dark-500 cursor-not-allowed" : "bg-gold-500 text-dark-900 hover:bg-gold-600"}`,
            children: isSubmitting ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center", children: [
              /* @__PURE__ */ jsxs("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-dark-900", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
              ] }),
              "Processing..."
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Icon, { name: "send", className: "w-5 h-5 mr-2" }),
              "Submit Request"
            ] })
          }
        )
      ] })
    ] })
  ] });
}
export {
  BookingForm as B
};
