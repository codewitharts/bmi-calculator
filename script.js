let btn = document.getElementById('btn');
let bmiShow = document.getElementById('result');

btn.addEventListener('click', function () {
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);

  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    let heightMeter = height * 0.3048;
    let bmi = weight / (heightMeter * heightMeter);
    bmiFixed = bmi.toFixed(2);
    let category = '';
    let bgColor = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      bgColor = 'bg-[#fef9c3]';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal';
      bgColor = 'bg-[#d1fae5]';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'overweight';
      bgColor = 'bg-[#fde68a]';
    } else {
      category = 'Obese';
      bgColor = 'bg-[#fecaca]';
    }
    bmiShow.className = `p-4 m-6 rounded-lg text-black font-bold text-2xl ${bgColor}`;
    bmiShow.innerHTML = `Your BMI is <span class="text-black">${bmiFixed}</span><br><span class="uppercase text-xl">${category}</span>`;
    bmiShow.classList.remove('hidden');
  } else {
    bmiShow.className = `p-4 m-6  rounded-lg text-white font-bold text-xl bg-gray-600`;
    bmiShow.innerHTML = '❌ Please enter valid weight and height!';
    bmiShow.classList.remove('hidden');
  }
  // ✅ Clear the input fields
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
});
