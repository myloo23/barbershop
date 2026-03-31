import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { bookingPolicies, bookingTimeSlots, featuredServices, teamMembers } from '../../data/siteData';

const initialState = {
  name: '',
  phone: '',
  email: '',
  service: featuredServices[0].name,
  barber: teamMembers[0].name,
  date: '',
  time: bookingTimeSlots[8],
  notes: '',
};

export default function BookingSection() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null);

  const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time) {
      setStatus({ type: 'error', message: 'Please complete all required fields before sending your appointment request.' });
      return;
    }

    setStatus({
      type: 'success',
      message: 'Request received. Our front desk will confirm your barber and timeslot by phone or email shortly.',
    });
    setFormData(initialState);
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status) {
      setStatus(null);
    }
  };

  return (
    <section id="booking" className="section-border py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Book Appointment"
            title="Request an Appointment in Under a Minute"
            description="Choose your service, preferred barber, and ideal time. We confirm each request personally to keep schedules accurate."
          />
          <div className="panel mt-8 p-6 text-sm leading-relaxed text-[#c7b39a]">
            <p className="font-semibold text-[#ead7bd]">Booking & Cancellation Policy</p>
            <ul className="mt-3 space-y-2">
              {bookingPolicies.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          onSubmit={handleSubmit}
          className="panel p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-[#dac8ae]" htmlFor="booking-name">
              Full Name *
              <input
                id="booking-name"
                className="input-base mt-2"
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Bence Kovacs"
                autoComplete="name"
                required
              />
            </label>
            <label className="text-sm text-[#dac8ae]" htmlFor="booking-phone">
              Phone *
              <input
                id="booking-phone"
                className="input-base mt-2"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="+36 30 234 7789"
                autoComplete="tel"
                required
              />
            </label>
            <label className="text-sm text-[#dac8ae]" htmlFor="booking-email">
              Email *
              <input
                id="booking-email"
                className="input-base mt-2"
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="bence.kovacs@email.com"
                autoComplete="email"
                required
              />
            </label>
            <label className="text-sm text-[#dac8ae]" htmlFor="booking-service">
              Service
              <select
                id="booking-service"
                className="input-base mt-2"
                value={formData.service}
                onChange={(e) => updateField('service', e.target.value)}
              >
                {featuredServices.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} ({service.duration})
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-[#dac8ae]" htmlFor="booking-barber">
              Preferred Barber
              <select
                id="booking-barber"
                className="input-base mt-2"
                value={formData.barber}
                onChange={(e) => updateField('barber', e.target.value)}
              >
                {teamMembers.map((barber) => (
                  <option key={barber.name} value={barber.name}>
                    {barber.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-[#dac8ae]" htmlFor="booking-date">
              Date *
              <input
                id="booking-date"
                className="input-base mt-2"
                type="date"
                value={formData.date}
                min={minDate}
                onChange={(e) => updateField('date', e.target.value)}
                required
              />
            </label>
            <label className="text-sm text-[#dac8ae]" htmlFor="booking-time">
              Time *
              <select
                id="booking-time"
                className="input-base mt-2"
                value={formData.time}
                onChange={(e) => updateField('time', e.target.value)}
                required
              >
                {bookingTimeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-[#dac8ae] sm:col-span-2" htmlFor="booking-notes">
              Notes
              <textarea
                id="booking-notes"
                className="input-base mt-2 min-h-28 resize-y"
                value={formData.notes}
                onChange={(e) => updateField('notes', e.target.value)}
                placeholder="Share style preferences, event details, or product sensitivities."
              />
            </label>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-[#bfa88a]">
            Confirmation: you will receive a call or email from our front desk before your booking is finalized.
          </p>

          {status && (
            <p
              className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
                  : 'border-rose-400/40 bg-rose-400/10 text-rose-200'
              }`}
              role="status"
            >
              {status.message}
            </p>
          )}

          <Button href={null} type="submit" className="mt-6 w-full">
            Request Appointment
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
