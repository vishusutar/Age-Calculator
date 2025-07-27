const from = document.getElementById("from");
const to = document.getElementById("to");
const calBtn = document.getElementById("calBtn");

calBtn.addEventListener("click", () => {
	 if(!(from.value && to.value)){
		 return;
	 }
	 
   document.getElementById("nextBirY").innerText = "";
   document.getElementById("nextBirM").innerText = "";
   document.getElementById("nextBirD").innerText = "";

   document.getElementById("birY").textContent = "";
   document.getElementById("birM").textContent = "";
   document.getElementById("birD").textContent = "";

   let fromDate = new Date(from.value);
   let toDate = new Date(to.value);

   // Calculating Total Result
   const ms = toDate.getTime() - fromDate.getTime();
   const s = Math.floor(ms / 1000);
   const m = Math.floor(s / 60);
   const h = Math.floor(m / 60);
   const d = Math.floor(h / 24);

   // Displaying Total Result
   document.getElementById("TotalD").textContent = `≈ ${d} days • ${h} hours • ${m} minutes • ${s} seconds • ${ms} milliseconds`;

   // Calculating Result
   let birY = toDate.getFullYear() - fromDate.getFullYear();
   let birM = toDate.getMonth() - fromDate.getMonth();
   let birD = toDate.getDate() - fromDate.getDate();

   if (birD < 0) {
      birM--;
      const prevMonthDate = new Date(fromDate.getFullYear(), fromDate.getMonth(), 0).getDate();
      birD += prevMonthDate;
   }

   if (birM < 0) {
      birY--;
      birM += 12;
   }

   // Displaying Result
   document.getElementById("birY").textContent = birY;
   document.getElementById("birM").textContent = birM;
   document.getElementById("birD").textContent = birD;

   let today = toDate; // current "to" value
   let nextBirthday = new Date(today.getFullYear(), fromDate.getMonth(), fromDate.getDate());

   if (nextBirthday < today) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
   }

   // logic To Calculate next Birthday

   let nextbirY = nextBirthday.getFullYear() - today.getFullYear();
   let nextbirM = nextBirthday.getMonth() - today.getMonth();
   let nextbirD = nextBirthday.getDate() - today.getDate();

   if (nextbirD < 0) {
      nextbirM--;
      const prevMonthDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      nextbirD += prevMonthDate;
   }

   if (nextbirM < 0) {
      nextbirY--;
      nextbirM += 12;
   }

   // Displaying Result
   document.getElementById("nextBirY").innerText = nextbirY;
   document.getElementById("nextBirM").innerText = nextbirM;
   document.getElementById("nextBirD").innerText = nextbirD;

});
