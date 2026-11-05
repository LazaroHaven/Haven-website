document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. BREATHING EXERCISE LOGIC
     -------------------------------------------------------------------------- */
  let breathingInterval;
  let isBreathing = false;

  const breathBtn = document.getElementById('breathBtn');
  const breathCircle = document.getElementById('breathCircle');

  if (breathBtn) {
    breathBtn.addEventListener('click', toggleBreathing);
  }

  function toggleBreathing() {
    if (!isBreathing) {
      isBreathing = true;
      breathBtn.textContent = 'Stop Exercise';
      runBreathingCycle();
      breathingInterval = setInterval(runBreathingCycle, 8000);
    } else {
      isBreathing = false;
      clearInterval(breathingInterval);
      breathBtn.textContent = 'Start Exercise';
      breathCircle.classList.remove('expand');
      breathCircle.textContent = 'Inhale';
    }
  }

  function runBreathingCycle() {
    // Inhale phase (4s)
    breathCircle.classList.add('expand');
    breathCircle.textContent = 'Inhale';

    // Exhale phase (4s)
    setTimeout(() => {
      if (isBreathing) {
        breathCircle.classList.remove('expand');
        breathCircle.textContent = 'Exhale';
      }
    }, 4000);
  }

  /* --------------------------------------------------------------------------
     2. MOOD CHECK-IN LOGIC
     -------------------------------------------------------------------------- */
  const moodMessages = {
    anxious: "It's completely normal to feel this way. Put one hand on your chest, take a slow breath, and focus only on the present minute.",
    overwhelmed: "You don't need to fix everything right now. Step back, pick just one small task, or pause completely for five minutes.",
    sad: "Allow yourself to feel without judgment. Treat yourself with the same gentleness you would show to a dear friend today.",
    okay: "A steady day is a good day. Enjoy the calm quiet and take things at a peaceful pace.",
    calm: "Wonderful to hear. Enjoy this peaceful moment and share a bit of your light with someone else if you can."
  };

  const moodButtons = document.querySelectorAll('.mood-btn');
  const moodFeedback = document.getElementById('moodFeedback');

  moodButtons.forEach(button => {
    button.addEventListener('click', () => {
      const moodKey = button.getAttribute('data-mood');
      
      // Clear active styling from all buttons
      moodButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');

      // Display feedback
      if (moodFeedback && moodMessages[moodKey]) {
        moodFeedback.style.display = 'block';
        moodFeedback.textContent = moodMessages[moodKey];
      }
    });
  });

  /* --------------------------------------------------------------------------
     3. AFFIRMATION GENERATOR LOGIC
     -------------------------------------------------------------------------- */
  const affirmations = [
    "You do not have to carry everything all at once. Take it one breath at a time.",
    "Your feelings are valid, and it is okay to pause and rest whenever you need.",
    "You are worthy of the same kindness and compassion you so freely give to others.",
    "Progress is not linear. Small, quiet steps forward still count as progress.",
    "You have survived 100% of your hardest days so far. You are stronger than you realize.",
    "Peace begins when you let go of the things you cannot control right now."
  ];

  const affirmationDisplay = document.getElementById('affirmationDisplay');
  const affirmationBtn = document.getElementById('affirmationBtn');

  if (affirmationBtn) {
    affirmationBtn.addEventListener('click', generateAffirmation);
  }

  function generateAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    
    // Smooth opacity fade effect
    affirmationDisplay.style.opacity = '0';
    setTimeout(() => {
      affirmationDisplay.textContent = `"${affirmations[randomIndex]}"`;
      affirmationDisplay.style.opacity = '1';
    }, 200);
  }

});
