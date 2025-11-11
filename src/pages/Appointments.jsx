import React, { useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  isToday,
  isSameDay,
  parse,
} from "date-fns";
import {
  LuCalendar,
  LuClock,
  LuUser,
  LuSearch,
  LuMapPin,
  LuVideo,
  LuPhone,
  LuStethoscope,
  LuX,
} from "react-icons/lu";
import Toggle from "../Components/Reusable/Toggle";

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState("week");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [newAppointment, setNewAppointment] = useState(false);
  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    datetime: "",
    type: "",
    mode: "in-person",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setFormData("");
    e.preventDefault();
    const newErrors = {};

    if (!formData.patient.trim()) newErrors.patient = "Patient name required";
    if (!/^\+?[0-9\s\-]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Valid phone number required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      // await api.scheduleAppointment(formData);
      setNewAppointment(false);
    } catch (err) {
      alert("Failed to schedule");
    } finally {
      setLoading(false);
    }
  };

  // Mock appointments
  const [appointments] = useState([
    {
      id: 1,
      patient: "Aisha Bello",
      doctor: "Dr. Okonkwo",
      time: "09:00",
      duration: 30,
      type: "Consultation",
      status: "confirmed",
      mode: "in-person",
      date: new Date(),
    },
    {
      id: 2,
      patient: "Chinedu Eze",
      doctor: "Dr. Adebayo",
      time: "10:15",
      duration: 45,
      type: "Follow-up",
      status: "pending",
      mode: "video",
      date: addDays(new Date(), 1),
    },
    {
      id: 3,
      patient: "Fatima Yusuf",
      doctor: "Dr. Ibrahim",
      time: "13:30",
      duration: 30,
      type: "Checkup",
      status: "completed",
      mode: "phone",
      date: addDays(new Date(), 2),
    },
    {
      id: 4,
      patient: "Grace Okafor",
      doctor: "Dr. Ibrahim",
      time: "14:45",
      duration: 30,
      type: "Review",
      status: "confirmed",
      mode: "in-person",
      date: addDays(new Date(), 3),
    },
    {
      id: 5,
      patient: "Daniel Jhon",
      doctor: "Dr. Ibrahim",
      time: "16:45",
      duration: 30,
      type: "Review",
      status: "pending",
      mode: "in-person",
      date: addDays(new Date(), 4),
    },
    {
      id: 6,
      patient: "opayinka sam",
      doctor: "Dr. Ibrahim",
      time: "12:45",
      duration: 30,
      type: "Review",
      status: "confirmed",
      mode: "in-person",
      date: addDays(new Date(), 5),
    },
    {
      id: 7,
      patient: "dayo emma",
      doctor: "Dr. Ibrahim",
      time: "8:00",
      duration: 30,
      type: "Review",
      status: "confirmed",
      mode: "in-person",
      date: addDays(new Date(), 6),
    },
  ]);

  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200";
      case "completed":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getModeIcon = (mode) => {
    switch (mode) {
      case "video":
        return <LuVideo className="w-4 h-4" />;
      case "phone":
        return <LuPhone className="w-4 h-4" />;
      default:
        return <LuMapPin className="w-4 h-4" />;
    }
  };

  // 30-minute slots from 08:00 to 17:30
  const timeSlots = Array.from({ length: 20 }, (_, i) => {
    const hour = 8 + Math.floor(i / 2);
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  });

  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch =
      apt.patient.toLowerCase().includes(search.toLowerCase()) ||
      apt.doctor.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || apt.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="  ">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <LuCalendar className="text-blue-600 dark:text-blue-400" />{" "}
          Appointments
        </h1>
        <button
          onClick={() => setNewAppointment(!newAppointment)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl"
        >
          <LuStethoscope />
          New Appointment
        </button>
        {newAppointment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-md overflow-hidden bg-white rounded-xl shadow-xl dark:bg-gray-800">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Schedule New Appointment
                </h1>
                <button
                  onClick={() => setNewAppointment(false)}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  aria-label="Close"
                >
                  <LuX className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Patient Name */}
                <div>
                  <label
                    htmlFor="patient"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Patient Name
                  </label>
                  <input
                    id="patient"
                    type="text"
                    required
                    value={formData.patient}
                    onChange={(e) =>
                      setFormData({ ...formData, patient: e.target.value })
                    }
                    placeholder="e.g. Ayodeji Johnson"
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition"
                  />
                  {errors.patient && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.patient}
                    </p>
                  )}
                </div>

                {/* Doctor */}
                <div>
                  <label
                    htmlFor="doctor"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Doctor
                  </label>
                  <select
                    id="doctor"
                    required
                    value={formData.doctor}
                    onChange={(e) =>
                      setFormData({ ...formData, doctor: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition"
                  >
                    <option value="">Select doctor</option>
                    <option value="Dr. Adebayo">Dr. Adebayo</option>
                    <option value="Dr. Okonkwo">Dr. Okonkwo</option>
                    <option value="Dr. Ibrahim">Dr. Ibrahim</option>
                    <option value="Dr. Yusuf">Dr. Yusuf</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div>
                  <label
                    htmlFor="datetime"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Date & Time
                  </label>
                  <input
                    id="datetime"
                    type="datetime-local"
                    required
                    min={new Date().toISOString().slice(0, 16)}
                    value={formData.datetime}
                    onChange={(e) =>
                      setFormData({ ...formData, datetime: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition"
                  />
                </div>

                {/* Appointment Type */}
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Appointment Type
                  </label>
                  <select
                    id="type"
                    required
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition"
                  >
                    <option value="">Select type</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Checkup">Checkup</option>
                    <option value="Lab Review">Lab Review</option>
                    <option value="Surgery">Surgery</option>
                  </select>
                </div>

                {/* Mode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Mode
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["in-person", "video", "phone"].map((mode) => (
                      <label
                        key={mode}
                        className={`flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer transition ${
                          formData.mode === mode
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                            : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="mode"
                          value={mode}
                          checked={formData.mode === mode}
                          onChange={(e) =>
                            setFormData({ ...formData, mode: e.target.value })
                          }
                          className="sr-only"
                          required
                        />
                        {mode === "video" ? (
                          <LuVideo className="w-4 h-4" />
                        ) : mode === "phone" ? (
                          <LuPhone className="w-4 h-4" />
                        ) : (
                          <LuMapPin className="w-4 h-4" />
                        )}
                        <span className="text-sm capitalize">
                          {mode.replace("-", " ")}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+234 803 123 4567"
                    pattern="\+?[0-9\s\-]{10,}"
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          opacity="0.3"
                        />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Scheduling...
                    </>
                  ) : (
                    "Schedule Appointment"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm mb-6 flex flex-col md:flex-row gap-3 md:items-center">
        <div className="flex items-center gap-2 flex-1">
          <LuSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search patient or doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
          />
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
        >
          <option value="all">All Status</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg">
          {["week", "list"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-2 rounded-md capitalize ${
                view === v
                  ? "bg-white dark:bg-gray-600 shadow-sm"
                  : "text-gray-500 dark:text-gray-300"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
        <Toggle />
      </div>

      {/* Week View */}
      {view === "week" && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md h-[500px] overflow-auto ">
          <div className="grid grid-cols-8 border-b border-gray-200 dark:border-gray-700">
            <div className="p-3 text-sm text-gray-500 dark:text-gray-400">
              Time
            </div>
            {weekDays.map((day) => (
              <div key={day} className="text-center py-3">
                <div className="font-medium text-gray-900 dark:text-white">
                  {format(day, "EEE")}
                </div>
                <div
                  className={`text-lg font-semibold ${
                    isToday(day)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {format(day, "d")}
                </div>
              </div>
            ))}
          </div>

          <div className="max-h-[600px] overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
            {timeSlots.map((time) => (
              <div key={time} className="grid grid-cols-8">
                <div className="p-3 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {time}
                </div>

                {weekDays.map((day, idx) => {
                  // find all appointments within this 30-min window
                  const slotStart = parse(time, "HH:mm", new Date());
                  const [h, m] = time.split(":").map(Number);
                  const nextSlot = new Date(slotStart);
                  nextSlot.setMinutes(m + 30);

                  const apts = filteredAppointments.filter((a) => {
                    const aptTime = parse(a.time, "HH:mm", new Date());
                    return (
                      isSameDay(a.date, day) &&
                      aptTime >= slotStart &&
                      aptTime < nextSlot
                    );
                  });

                  return (
                    <div key={idx} className="p-2">
                      {apts.map((apt) => (
                        <div
                          key={apt.id}
                          className={`rounded-lg p-2 text-xs mb-1 ${getStatusColor(
                            apt.status
                          )}`}
                        >
                          <div className="font-medium truncate">
                            {apt.patient}
                          </div>
                          <div className="text-xs opacity-75 flex items-center gap-1">
                            {getModeIcon(apt.mode)} {apt.type}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <div className="space-y-4  h-[500px] overflow-auto">
          {filteredAppointments.map((apt) => (
            <div
              key={apt.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center justify-between hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                  {apt.patient.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {apt.patient}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span className="flex items-center gap-1">
                      <LuClock className="w-4 h-4" /> {apt.time} ({apt.duration}
                      m)
                    </span>
                    <span className="flex items-center gap-1">
                      {getModeIcon(apt.mode)} {apt.mode}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuUser className="w-4 h-4" /> {apt.doctor}
                    </span>
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  apt.status
                )}`}
              >
                {apt.status}
              </span>
            </div>
          ))}

          {filteredAppointments.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 py-10">
              No appointments found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Appointments;
