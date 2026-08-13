const fs = require('fs');
const path = require('path');

const srcDirA = 'C:\\Users\\Flavio\\.gemini\\antigravity\\brain\\73df4b1c-7b51-47e0-8cfc-0d34edb30e48';
const srcDirB = 'C:\\Users\\Flavio\\.gemini\\antigravity\\brain\\4cb3cb2c-fffe-4f32-8011-96a67388c157';
const destDir = 'C:\\Users\\Flavio\\Desktop\\Vidraçaria em PO2\\public';

const filesToCopy = [
  // Agent A
  { src: path.join(srcDirA, 'espelho_1_1786307943376.jpg'), dest: 'espelho-real-1.jpg' },
  { src: path.join(srcDirA, 'espelho_2_1786307954487.jpg'), dest: 'espelho-real-2.jpg' },
  { src: path.join(srcDirA, 'cobertura_1_1786307966021.jpg'), dest: 'cobertura-real-1.jpg' },
  { src: path.join(srcDirA, 'cobertura_2_1786307978040.jpg'), dest: 'cobertura-real-2.jpg' },
  { src: path.join(srcDirA, 'divisoria_1_1786307988256.jpg'), dest: 'divisoria-real-1.jpg' },
  { src: path.join(srcDirA, 'divisoria_2_1786307999134.jpg'), dest: 'divisoria-real-2.jpg' },
  
  // Agent B
  { src: path.join(srcDirB, 'guardacorpo_1_1786307943575.jpg'), dest: 'guardacorpo-real-1.jpg' },
  { src: path.join(srcDirB, 'guardacorpo_2_1786307956323.jpg'), dest: 'guardacorpo-real-2.jpg' },
  { src: path.join(srcDirB, 'porta_1_1786307968273.jpg'), dest: 'porta-real-1.jpg' },
  { src: path.join(srcDirB, 'porta_2_1786307979541.jpg'), dest: 'porta-real-2.jpg' },
  { src: path.join(srcDirB, 'sacada_1_1786307990447.jpg'), dest: 'sacada-real-1.jpg' },
  { src: path.join(srcDirB, 'sacada_2_1786308001030.jpg'), dest: 'sacada-real-2.jpg' },

  // Fallbacks for missing images (Muros and Manutenção) due to quota limits
  { src: path.join(destDir, 'projeto_sacada.jpg'), dest: 'muro-real-1.jpg' },
  { src: path.join(destDir, 'projeto_guarda_corpo.jpg'), dest: 'muro-real-2.jpg' },
  { src: path.join(destDir, 'projeto_box.jpg'), dest: 'manutencao-real-1.jpg' },
  { src: path.join(destDir, 'glazier_workshop_bg.jpg'), dest: 'manutencao-real-2.jpg' }
];

filesToCopy.forEach(item => {
  try {
    if (fs.existsSync(item.src)) {
      fs.copyFileSync(item.src, path.join(destDir, item.dest));
      console.log(`Successfully copied ${item.src} to ${item.dest}`);
    } else {
      console.error(`Source file not found: ${item.src}`);
    }
  } catch (err) {
    console.error(`Error copying ${item.dest}:`, err);
  }
});
