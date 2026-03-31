import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { featuredServices, teamMembers } from '../../data/siteData';

const initialState = {
  name: '',
  phone: '',
  email: '',
  service: featuredServices[0].name,
  barber: teamMembers[0].name,
  date: '',
  time: '',
  notes: '',
};

export default function BookingSection() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time) {
      setStatus({ type: 'error', message: 'Please complete all required fields before submitting your booking request.' });
      return;
    }

    setStatus({
      type: 'success',
      message: 'Appointment request submitted. Our team will confirm your slot within business hours.',
    });
    setFormData(initialState);
  };

  const updateField = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="booking" className="section-border py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Book Appointment"
            title="Reserve Your Chair in Less Than a Minute"
            description="Simple booking flow designed for speed. Integrate this form later with your preferred scheduling backend or CRM."
          />
          <div className="panel mt-8 p-6 text-sm leading-relaxed text-[#c7b39a]">
            <p className="font-semibold text-[#ead7bd]">Booking & Cancellation Policy</p>
            <p className="mt-3">
              Appointments can be rescheduled up to 12 hours in advance. Late cancellations and no-shows may incur a
              service charge.
            </p>
            <p className="mt-3">
              Arriving 10+ minutes late may require shortening or rescheduling to respect all booked clients.
            </p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          onSubmit={handleSubmit}
          className="panel p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-[#dac8ae]">
              Full Name *
              <input className="input-base mt-2" type="text" value={formData.name} onChange={(e) => updateField('name', e.target.value)} placeholder="John Carter" />
            </label>
            <label className="text-sm text-[#dac8ae]">
              Phone *
              <input className="input-base mt-2" type="tel" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="+36 30 123 4567" />
            </label>
            <label className="text-sm text-[#dac8ae]">
              Email *
              <input className="input-base mt-2" type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} placeholder="john@email.com" />
            </label>
            <label className="text-sm text-[#dac8ae]">
              Service
              <select className="input-base mt-2" value={formData.service} onChange={(e) => updateField('service', e.target.value)}>
                {featuredServices.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-[#dac8ae]">
              Preferred Barber
              <select className="input-base mt-2" value={formData.barber} onChange={(e) => updateField('barber', e.target.value)}>
                {teamMembers.map((barber) => (
                  <option key={barber.name} value={barber.name}>
                    {barber.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-[#dac8ae]">
              Date *
              <input className="input-base mt-2" type="date" value={formData.date} onChange={(e) => updateField('date', e.target.value)} />
            </label>
            <label className="text-sm text-[#dac8ae]">
              Time *
              <input className="input-base mt-2" type="time" value={formData.time} onChange={(e) => updateField('time', e.target.value)} />
            </label>
            <label className="text-sm text-[#dac8ae] sm:col-span-2">
              Notes
              <textarea
                className="input-base mt-2 min-h-28 resize-y"
                value={formData.notes}
                onChange={(e) => updateField('notes', e.target.value)}
                placeholder="Share preferences, occasion details, or style inspiration."
              />
            </label>
          </div>

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
            Confirm Booking Request
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
