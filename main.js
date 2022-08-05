function yillar(){
    var tarih=new Date();
    var yil=tarih.getFullYear();

    for(var i=yil;i>=1950;i--){
        var secenek= document.createElement("option");
        document.getElementById("aracYili").options.add(secenek);
        secenek.value=i;
        secenek.text=i;
    }
}

function VergiHesapla()
{
    var aracTipi,aracgucu,aracYili;
    var odenecekVergi;
    var i;

    //araçtipi seçimini alması için for
    for(i=0;i<document.getElementById("aracTipi").length; i++)
    {
        if(document.getElementById("aracTipi").options[i].selected)
        {
            aracTipi=document.getElementById("aracTipi").options[i].value;
        }

        console.log(aracTipi);
    }

    //Motorgücü seçimini alması için for
    for(i=0;i<document.getElementsByName("motorGucu").length; i++)
    {
        if(document.getElementsByName("motorGucu")[i].checked)
        {
            aracgucu=document.getElementsByName("motorGucu")[i].value;
        }

        console.log(aracgucu);
    }

    //Araç yılını seçimine almak
    for(i=0;i<document.getElementById("aracYili").length; i++)
    {
        if(document.getElementById("aracYili").options[i].selected)
        {
            aracYili=document.getElementById("aracYili").options[i].value;
        }

        console.log(aracTipi);
    }


    //1.kontrol bloğu-araç tipine göre vergi alt sınırını belirleme
    if(aracTipi=="motorsiklet")
    {
       odenecekVergi=100;
    }
    else if(aracTipi=="otomobil")
    {
        odenecekVergi=200;
    }
    
    //2.kontrol bloğu-motorgücüne göre eklenecek tutarı belirleme
    if(aracgucu=="1000cc-1600cc")
    {
        odenecekVergi=odenecekVergi+50;
    }
    else if(aracgucu=="1601cc-2000cc")
    {
        odenecekVergi=odenecekVergi+100;
    }
    else if(aracgucu=="2001cc")
    {
        odenecekVergi=odenecekVergi+150;
    }

    //3.kontrol seçilen yılına göre küçükse indirim yapılacak
    if(aracYili<=2005)
    {
        odenecekVergi=odenecekVergi-25;
    }

    document.getElementById("sonuc").innerHTML="Ödemeniz Gereken Vergi: "+odenecekVergi;


}