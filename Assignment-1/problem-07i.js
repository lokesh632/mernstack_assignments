let n=5;
let row=0;
while(row<n)
{
    let col=0;
    let num= n;
    while(col<n){
        process.stdout.write(num+" ");
        if(num>n-row)
        {
            num--;
        }
        col+=1;
    }
    col=0;
    num=n-row;
    if(row==n-1)
    {
        num=n-row+1;
    }
    while(col<n-1){
        process.stdout.write(num+" ");
        if(row+col>=3)
        {
            num++;
        }
        col+=1;
    }

    
    process.stdout.write("\n");
    row+=1;
}
row=1
while(row<n)
{
    let col=0;
    let num= n;
    while(col<n){
        process.stdout.write(num+" ");
        if(num>row+1)
        {
            num--;
        }
        col+=1;
    }
    col=1;
    num=row+1;
    while(col<n)
    {
        process.stdout.write(num+" ");
        if(col>=row)
        {
            num++;
        }
        col+=1;
    }

    process.stdout.write("\n");
    row+=1;
}
