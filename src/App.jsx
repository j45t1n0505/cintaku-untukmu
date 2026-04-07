import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './App.css';
import fotoNaila1 from './assets/naila1.jpg';
import fotoNaila2 from './assets/naila2.jpg';


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  // Trigger untuk memunculkan notes kecil setelah surat terbaca
  const handleReadMore = () => setShowNotes(true);

  return (
    <div className="app-container">
      <motion.div 
        className="envelope-wrapper"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(true)}>
          {/* Bagian depan amplop */}
          <div className="flap"></div>
          <div className="pocket"></div>
          
          {/* Label untuk Naila */}
          {!isOpen && (
            <motion.div 
              className="tap-instruction"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Untuk: Naila <FaHeart className="heart-icon" />
              <br/><span>(Tap untuk membuka)</span>
            </motion.div>
          )}

          {/* Surat yang akan keluar */}
          <div className={`letter ${isOpen ? 'slide-up' : ''}`}>
            <div className="letter-content">
              {/* Tempat Foto Naila */}
              <div className="photo-container">
                <img 
                  src={fotoNaila1} 
                  alt="Naila" 
                  className="naila-photo"                
                />
                <p className="photo-caption">Senyum yang selalu aku cari.</p>
              </div>
              <div className="photo-container">
                <img 
                  src={fotoNaila2} 
                  alt="Naila" 
                  className="naila-photo"
                />
                <p className="photo-caption">Cantik yang tak lekang oleh waktu.</p>
              </div>

              <h1>Teruntuk Naila,</h1>
              <p>
                Aku tidak pernah pandai merangkai kata. Tapi jika itu tentangmu, logikaku seringkali kalah oleh hal-hal yang tidak bisa dijelaskan oleh algoritma mana pun di dunia ini.
              </p>
              <p>
                Naila, setiap kali aku melihat realitas, aku menyadari bahwa eksistensimu adalah anomali terindah yang pernah terjadi dalam hidupku. Kamu bukan sekadar tempat singgah, kamu adalah destinasi dari segala pencarianku. Dalam setiap hening, namamu adalah satu-satunya resonansi yang terdengar jelas.
              </p>
              <p>
                Aku tahu, perjalanan ke depan tidak akan selalu linier. Akan ada banyak variabel dan rintangan yang tidak terprediksi. Namun, selama sistem pertahanan hatiku berpusat padamu, aku yakin kita bisa mengkalibrasi ulang setiap masalah menjadi alasan untuk lebih kuat.
              </p>
              <p>
                Tetaplah di sini, di sisiku. Biarkan aku menjadi versi terbaik dari diriku, untukmu.
              </p>
              <p className="signature">
                Dengan seluruh rasionalitas dan perasaanku,Kupersembahkan untukmu<br/><br/>
                <strong>Justine</strong>
              </p>

              {!showNotes && (
                <button className="btn-notes" onClick={handleReadMore}>
                  Ada sesuatu yang tertinggal...
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Notes Animation */}
      <AnimatePresence>
        {showNotes && (
          <motion.div 
            className="floating-notes-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="note note-1"
              initial={{ x: -100, y: 50, opacity: 0, rotate: -15 }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: -5 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              "Kamu cantik hari ini, seperti biasanya dan selamanya."
            </motion.div>
            
            <motion.div 
              className="note note-2"
              initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }}
              animate={{ x: 0, y: 0, opacity: 1, rotate: 5 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              "Jangan lupa makan, aku nggak mau kamu sakit sayang."
            </motion.div>

            <motion.button 
              className="btn-close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setShowNotes(false)}
            >
              Tutup Notes
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}