export default function InputBox({label, placeholder, type}){
    type = type?type:"text"
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        {type=="number"?<input placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" type={type} min={0}/>:
        <input placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" type={type}/>}
    </div>
}