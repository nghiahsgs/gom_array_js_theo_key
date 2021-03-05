const find_index = (array_a,tieu_chi,value)=>{
    for(let i=0;i<array_a.length;i++){
        if(array_a[i][tieu_chi] == value){
            return i
        }
    }
}

// index = find_index(List_obj,tieu_chi,obj[tieu_chi])

const gom_array = (List_obj,tieu_chi,tieu_chi_cong_don)=>{
    list_kq = []
    List_obj.forEach(obj=>{
        list_tieu_chi = list_kq.map(e => e[tieu_chi])

        if(!list_tieu_chi.includes(obj[tieu_chi])){

            list_tieu_chi = [...list_tieu_chi,obj[tieu_chi]]
            list_kq = [...list_kq,obj]

        }else{
            // da co => update
            // index = find_index(List_obj,tieu_chi,obj[tieu_chi])
            index = find_index(list_kq,tieu_chi,obj[tieu_chi])

            // console.log('-------------')
            // console.log('index',index)
            // console.log('list_kq',list_kq)
            // console.log('list_kq[index]',list_kq[index])
            list_kq[index][tieu_chi_cong_don] += obj[tieu_chi_cong_don]
        }


    })
    // console.log(list_kq)
    return list_kq
}

//
List_obj = [
    {
        "user_id": 70,
        "camp_name": "132-the rivana bình dương - 1000k",
        "camp_id": "12203261901",
        "cost": 1,
    },
    {
        "user_id": 70,
        "camp_name": "132-the rivana bình dương - 1000k",
        "camp_id": "12203261902",
        "cost": 2,
    },
    {
        "user_id": 70,
        "camp_name": "132-the rivana bình dương - 1000k",
        "camp_id": "12203261901",
        "cost": 10
    }
]
tieu_chi = "camp_id" // tieu chi de gom lai
tieu_chi_cong_don = "cost"
List_obj_2 = gom_array(List_obj,tieu_chi,tieu_chi_cong_don)
console.log(List_obj_2)
