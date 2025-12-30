#include<fstream>
#include<iostream>
#include<string>
#include<vector>

std::fstream output;
double temp=0.0;
void swap(int i,int j,std::vector<double> sample){
  temp=sample[i];
  sample[i]=sample[j];
  sample[j]=temp;
  output.open("log.js",std::ios::app);
  if(output.is_open()){
  output<<"[";
  for(int i=0;i<sample.size();++i){
  if(i!=sample.size()-1){
  output<<sample[i]<<",";
      }
  else{output<<sample[i]<<"]"<<std::endl;}
    }
  output.close();
  }

}
bool issorted(std::vector<double>& src){
for(int i=0;i<src.size()-1;++i){
if(src[i]>src[i+1])
  return false;
  }
return true;
}

void bubble(std::vector<double>& src){
//base case
if(issorted(src))
   return;
for(int i=0;i<src.size()-1;++i){
if(src[i]>src[i+1])
  swap(i,i+1,src);
  }
bubble(src);
}
int main(){

std::vector<double> s={1,2,4,5,8,6,3,6};
bubble(s);


}


