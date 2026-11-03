"use client";
import { useState } from "react";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "7bf986ab-8ccb-4a5c-942c-d673646f6633";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Values = {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck: string;
};

type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sending" | "success" | "error";

const empty: Values = { name: "", email: "", subject: "", message: "", botcheck: "" };

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const validate = (v: Values): Errors => {
    const next: Errors = {};
    if (v.name.trim().length < 2) next.name = "please enter your name";
    if (!EMAIL_RE.test(v.email.trim())) next.email = "enter a valid email address";
    if (v.message.trim().length < 10) next.message = "a little more detail, please (10+ characters)";
    return next;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    setErrorMsg("");

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `[Portfolio] ${values.subject.trim() || "New message"}`,
          from_name: "Portfolio contact form",
          name: values.name.trim(),
          email: values.email.trim(),
          replyto: values.email.trim(),
          message: values.message.trim(),
          botcheck: values.botcheck,
        }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setStatus("success");
        setValues(empty);
      } else {
        setStatus("error");
        setErrorMsg(data?.message ?? `request failed (HTTP ${res.status})`);
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof DOMException && err.name === "AbortError"
          ? "the request timed out. try again, or email me directly."
          : "could not send right now. try again, or email me directly."
      );
    } finally {
      clearTimeout(timer);
    }
  };

  if (status === "success") {
    return (
      <div className="card p-6 sm:p-8">
        <div className="text-acid text-[11px] mb-3">[ transmission received ]</div>
        <h3 className="text-[20px]">Thanks — message sent.</h3>
        <p className="mt-2 text-mute text-[13px]">
          I&apos;ll get back to you within a day or two. If it&apos;s urgent, email me directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-[11px] text-mute hover:text-acid transition-colors"
        >
          [ send another ]
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="card p-5 sm:p-6">
      <div aria-hidden="true" className="hidden">
        <label htmlFor="botcheck">Leave this field empty</label>
        <input
          id="botcheck"
          name="botcheck"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.botcheck}
          onChange={set("botcheck")}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-5">
        <Field
          id="name"
          label="name"
          placeholder="Pradeep"
          value={values.name}
          error={errors.name}
          onChange={set("name")}
        />
        <Field
          id="email"
          label="email"
          type="email"
          placeholder="you@example.com"
          value={values.email}
          error={errors.email}
          onChange={set("email")}
        />
      </div>

      <div className="mt-5">
        <Field
          id="subject"
          label="subject"
          placeholder="project inquiry"
          value={values.subject}
          onChange={set("subject")}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-mute mb-2">
          message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="tell me about the project..."
          value={values.message}
          onChange={set("message")}
          className="w-full bg-transparent border-b border-dim focus:border-acid outline-none py-3 text-[13px] placeholder:text-dim resize-none transition-colors"
        />
        {errors.message && <p className="mt-1 text-[10px] text-danger">! {errors.message}</p>}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-5 py-2.5 border border-acid text-acid hover:bg-acid hover:text-paper transition-colors text-[12px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          [ {status === "sending" ? "sending..." : "send message"} ]
        </button>
        <span className="text-[10px] text-dim">or email directly · replies within a day</span>
      </div>

      {status === "error" && (
        <p className="mt-4 text-[11px] text-danger">! {errorMsg}</p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] uppercase tracking-widest text-mute mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-dim focus:border-acid outline-none py-3 text-[13px] placeholder:text-dim transition-colors"
      />
      {error && <p className="mt-1 text-[10px] text-danger">! {error}</p>}
    </div>
  );
}
