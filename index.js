function pipe_fitting()
{
   // if($("#f0").val()==$("#f1").val()==$("#f3").val()==$("#f4").val()==$("#f5").val()=='') return 1;
    var ver=$("#f0").val();
    var h1=$("#f1").val();
    var h2=$("#f2").val();
    var r1=$("#f3").val();
    var r2=$("#f4").val();
    var t=$("#f5").val();
    const A=0.077;
    const g=9.81;
    const d1=0.016;
    const d2=0.028;

    let R=Math.abs((r1-r2)/100);
    let Q=(A*R)/t;
    const pi=Math.PI;
    let a1=(pi*d1*d1)/4;
    let a2=(pi*d2*d2)/4;
    let v1=Q/a1;
    let v2=Q/a2;
    let hl=Math.abs((h1-h2)/100);
    let kl;
    if(ver==="1")
        {
            kl=(2*g*hl)/(v1*v1);

        }
    else if(ver==="2")
    {
        kl=(2*g*hl)/((v1-v2)*(v1-v2));

    }
    console.log(ver,h1,h2,r1,r2,t);
    console.log(Q,v1,v2,hl,kl);
    Q=Q.toExponential(4);
    v1=v1.toExponential(4);
    v2=v2.toExponential(4);
    hl=hl.toExponential(4);
    kl=kl.toExponential(4);
    $("#f0").val('');
    $("#f1").val('');
    $("#f2").val('');
    $("#f3").val('');
    $("#f4").val('');
    $("#f5").val('');
        //console.log(R,(A*R),((A*R))/t)
        $("table").find('tbody').append("<tr><td>" +Q+ "</td> <td>" +v1+ "</td>  <td>" +v2+ "</td> <td>" +hl+ "</td> <td>" +kl+ "</td></tr>");
        
}
