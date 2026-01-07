#include<fstream>
#include<iostream>
#include<string>
#include<vector>
namespace cus{
std::fstream output;
double temp=0.0;
void swap(int i,int j,std::vector<double>& sample){
  temp=sample[i];
  sample[i]=sample[j];
  sample[j]=temp;
  output.open("sc.js",std::ios::app);
  if(output.is_open()){
  output<<"frame.push([";
  for(int i=0;i<sample.size();++i){
  if(i!=sample.size()-1){
  output<<sample[i]<<",";
      }
  else{output<<sample[i]<<"]);"<<std::endl;}
    }
  }
  output.close();
}
};//namespace end

bool issorted(std::vector<double>& src){
for(int i=0;i<src.size()-1;++i){
if(src[i]>src[i+1])
  return false;
  }
return true;
}

//bubble sort
void bubble(std::vector<double>& src){
  bool swaped;
  for(int i=0;i<src.size();++i){
  swaped=false;
  for(int j=0;j<src.size()-1-i;++j){
  if(src[j]==src[j+1]){
  cus::swap(j,j+1,src);
  swaped=true;
  }
    }
  if(!swaped)break;
  }
}

void selection(std::vector<double>& src){
    if(src.empty()){
        return;
    }
    for(std::size_t i=0;i<src.size()-1; ++i){
    std::size_t min_index = i;
    for (std::size_t j = i + 1; j < src.size(); ++j) {
    if (src[j] < src[min_index]) {
     min_index = j;
    }
    }
    if (min_index != i){
    cus::swap(i, min_index, src);
        }
    }
}

int main(){
std::vector<double> s = {
    73, 12, 89, 45, 6, 91, 38, 67, 24, 58,
    14, 81, 3, 70, 29, 95, 41, 52, 9, 64,
    27, 84, 18, 76, 33, 90, 5, 61, 47, 10,
    88, 35, 72, 21, 56, 92, 16, 68, 43, 7,
    59, 26, 80, 4, 97, 31, 65, 20, 86, 11
};
selection(s);


}


