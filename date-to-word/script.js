// Code goes here
var dayName = ['Minggu','Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

function to_word(number)
{
	var words = "";
	var numbers = ["","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"];

	if(number<12)
	{
		words = ""+numbers[number];
	}
	else if(number<20)
	{
		words = to_word(number-10)+" Belas";
	}
	else if(number<100)
	{
		words = to_word(Math.floor(number/10))+" Puluh "+to_word(number%10);
	}
	else if(number<200)
	{
		words = "seratus "+to_word(number-100);
	}
	else if(number<1000)
	{
		words = to_word(Math.floor(mber/100))+" Ratus "+to_word(number%100);
	}
	else if(number<2000)
	{
		words = "Seribu "+to_word(number-1000);
	}
	else if(number<1000000)
	{
		words = to_word(Math.floor(number/1000))+" Ribu "+to_word(number%1000);
	}
	return words;
}

var d = new Date();
document.write(dayName[d.getDay()]+' '+to_word(d.getDate())+' '+month[d.getMonth()]+' '+to_word(d.getFullYear()));


