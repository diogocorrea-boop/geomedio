function generateCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape' });
    const userName = document.getElementById('name')?.value || 'Aluno GeoMaster';
    const date = new Date().toLocaleDateString('pt-BR');

    doc.setFontSize(32);
    doc.setTextColor('#003366');
    doc.text('Certificado de Conclusão', 20, 40);

    doc.setFontSize(18);
    doc.setTextColor('#102A43');
    doc.text(`Este certificado é concedido a:`, 20, 70);
    doc.setFontSize(24);
    doc.text(userName, 20, 90);

    doc.setFontSize(16);
    doc.text('Por demonstrar dedicação ao aprendizado de Geografia na plataforma GeoMaster 2026.', 20, 110);
    doc.text(`Data: ${date}`, 20, 140);

    doc.save('certificado-geomaster.pdf');
    trackEvent('certificate_generated', 'Certificado', userName);
}

window.generateCertificate = generateCertificate;
