import { useState, useEffect } from 'react'
import styles from '../StylesContact.module.css'
import emailjs from '@emailjs/browser'

const subjectOptions = [
  "Selecione o motivo para o contato",
  "Projeto Freelance",
  "Oportunidade de Emprego",
  "Edição de video",
  "Outro"
]

// ─── Suas chaves do EmailJS (coloque no .env e use import.meta.env) ───
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export const Form = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Effect for closing the select menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles.select_wrapper}`)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.ssubject) {
      alert("Por favor, selecione o motivo do contato.")
      return;
    }
    setStatus("loading");

    try {
      await emaisjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Volta ao estado normal após 4 segundos
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const btnLabel = {
    idle: "Enviar Mensagem",
    loading: "Enviando...",
    success: "✓ Mensagem Enviada!",
    error: "✗ Erro! Tente novamente",
  }[status];

  return (
    <div className={styles.form_card}>
      <form className={styles.form} onSubmit={handleSubmit}>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Nome</label>

            <input
              className={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
            />

          </div>

          <div className={styles.field}>
            <label className={styles.label}>E-mail</label>

            <input
              className={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu e-mail"
              required
            />

          </div>

        </div>

        <div className={styles.field}>
          <label className={styles.label}>Assunto</label>
          <div className={styles.select_wrapper}>

            {/* Campo visível */}
            <div
              className={`${styles.select_trigger} ${styles.input}`}
              onClick={() => setOpen(!open)}
            >
              <span className={formData.subject ? styles.selected_text : styles.placeholder_text}>
                {formData.subject || "Selecione o motivo do contato"}
              </span>
              <span className={`${styles.arrow} ${open ? styles.open : ""}`}>▾</span>
            </div>

            {/* Lista de opções */}
            {open && (
              <ul className={styles.select_options}>
                {subjectOptions.slice(1).map((opt) => (
                  <li
                    key={opt}
                    className={`${styles.option} ${formData.subject === opt ? styles.option_active : ""}`}
                    onClick={() => {
                      setFormData({ ...formData, subject: opt });
                      setOpen(false);
                    }}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>


        <div className={styles.field}>
          <label className={styles.label}>Mensagem</label>
          <textarea
            name="message"
            value={formData.message}
            className={`${styles.input} ${styles.textarea}`}
            onChange={handleChange}
            placeholder="Sua mensagem"
            required
          />
        </div>

        <button type="submit" className={`${styles.btn_submit} ${styles[status]}`} disabled={status === 'loading'}>
          {btnLabel}
        </button>

      </form>
    </div>
  );
};