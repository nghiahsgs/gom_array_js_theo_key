const find_index = (array_a,tieu_chi,value)=>{
  for(let i=0;i<array_a.length;i++){
    if(array_a[i][tieu_chi] == value){
      return i
    }
  }
}

const gom_array = (List_obj,tieu_chi)=>{
  list_kq = []
  List_obj.forEach(obj=>{
    list_tieu_chi = list_kq.map(e => e['camp_id'])
    if(!list_tieu_chi.includes(obj[tieu_chi])){

      list_tieu_chi = [...list_tieu_chi,obj[tieu_chi]]
      list_kq = [...list_kq,obj]

    }else{
      // da co => update
      index = find_index(List_obj,"camp_id",obj['camp_id'])
      list_kq[index]['cost'] += obj['cost']
    }

    
  })
  // console.log(list_kq)
  return list_kq
}

List_obj = [
  {
      "user_id": 70,
      "camp_name": "132-the rivana bình dương - 1000k",
      "camp_id": "12203261901",
      "cost": 4710459,
  },
  {
      "user_id": 70,
      "camp_name": "132-the rivana bình dương - 1000k",
      "camp_id": "12203261901",
      "cost": 46853,
  },
  {
      "user_id": 70,
      "camp_name": "132-the rivana bình dương - 1000k",
      "camp_id": "12203261902",
      "cost": 91332
  }
]
tieu_chi = "camp_id"

List_obj_2 = gom_array(List_obj,tieu_chi)
console.log(List_obj_2)
