/* Валидация и анимация формы бронирования */

var buttonBooking = document.querySelector(".btn-booking"),
	formBooking = document.querySelector(".booking__form"),
	bookingDateIn = formBooking.querySelector("[name=booking-date-in]"),
	bookingDateOut = formBooking.querySelector("[name=booking-date-out]"),
	adultsCount = formBooking.querySelector("[name=booking-adults-num]"),
	childrenCount = formBooking.querySelector("[name=booking-children-num]"),
	isStorageSupport = true,
	storageAdultsNum = "",
	storageChildrenNum = "";

formBooking.classList.add("form-closed");	
	
try {
	
	storageAdultsNum = localStorage.getItem("adultsCount");
	storageChildrenNum = localStorage.getItem("childrenCount");
	
} catch (err) {
	
	isStorageSupport = false;
	
}	
	
buttonBooking.addEventListener("click", function (e) {
	
	e.preventDefault();
	
	if(storageAdultsNum) adultsCount.value = storageAdultsNum;
	if(storageChildrenNum) childrenCount.value = storageChildrenNum;
	
	formBooking.classList.toggle("form-closed");
	bookingDateIn.focus();
	
});

formBooking.addEventListener("submit", function (e) {
	
	if(!bookingDateIn.value || !bookingDateOut.value) {
		
		e.preventDefault();
		
		if(!bookingDateIn.value) bookingDateIn.classList.add("error");
		else bookingDateIn.classList.remove("error");
		
		if(!bookingDateOut.value) bookingDateOut.classList.add("error");
		else bookingDateOut.classList.remove("error");
			
		formBooking.classList.remove("validation-error");
		formBooking.offsetWidth = formBooking.offsetWidth;
		formBooking.classList.add("validation-error");	
		
	} else {
		
		formBooking.querySelector(".error").classList.remove(".error");
		
		if(isStorageSupport) {
			
			localStorage.setItem("adultsCount", adultsCount.value);
			localStorage.setItem("childrenCount", childrenCount.value);
			
		}
		
	}
	
});	

/* Валидация и анимация формы бронирования */

/* Карта */

ymaps.ready(function () {
	
	var centerCoords = [34.869497, -111.760186], mZoom = 8;
	var myMap = new ymaps.Map("sedona-location", 
		{
			center: centerCoords,
			zoom: mZoom
		}, 
		{
			searchControlProvider: "yandex#search"
		}
	),
	marker = new ymaps.Placemark([34.869497, -111.760186], 
		{
			hintContent: "Город Седона",
			balloonContent: ""
		}, 
		{
			iconLayout: "default#image",
			iconImageHref: "img/marker.png",
			iconImageSize: [80, 72],
			iconImageOffset: [-40, -72]
		}
	);
	myMap.geoObjects.add(marker);
	
});	

/* Карта */