// Fungsi untuk tombol 'Mulai Jelajah'
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk Quiz yang mendukung banyak pertanyaan
function checkAnswer(button, selectedAnswer) {
    const questionDiv = button.closest('.question');
    const correctAnswer = questionDiv.getAttribute('data-correct-answer');
    const buttons = questionDiv.querySelectorAll('button');
    const resultDiv = document.getElementById('result');

    // Nonaktifkan semua tombol setelah jawaban diberikan
    buttons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        button.classList.add('correct');
        resultDiv.innerHTML = '✨ Jawaban Anda Benar! Lanjutkan ke pertanyaan berikutnya.';
        resultDiv.style.color = 'green';
    } else {
        button.classList.add('incorrect');
        // Tandai jawaban yang benar
        buttons.forEach(btn => {
            if (btn.innerText === correctAnswer) {
                btn.classList.add('correct');
            }
        });
        resultDiv.innerHTML = `❌ Jawaban Salah. Jawaban yang benar adalah **${correctAnswer}**.`;
        resultDiv.style.color = 'red';
    }
}