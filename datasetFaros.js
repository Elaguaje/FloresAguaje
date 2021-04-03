const d = document;


export function dataset(carrusel){

const $carousel = document.querySelector(".carousel-inner"),

    $fragment = document.createDocumentFragment();

    
let img =[
	
{
src:"https://user-images.githubusercontent.com/81041775/112727282-7a935e80-8ee7-11eb-8a0e-429b0858796e.jpg"
},
	
{src:"https://user-images.githubusercontent.com/81041775/112727287-7d8e4f00-8ee7-11eb-9ed9-7588bb43d88c.jpg"
},
	
{
src:"https://user-images.githubusercontent.com/81041775/112727291-83843000-8ee7-11eb-8828-a7677e8b0159.jpg"
},
	
{
src:"https://user-images.githubusercontent.com/81041775/112727298-8bdc6b00-8ee7-11eb-8bdc-fbe5fb6c68e2.jpg"
},

{
src:"https://user-images.githubusercontent.com/81041775/112727302-93037900-8ee7-11eb-9962-843c7ee94288.jpg"
},
	
{
src:"https://user-images.githubusercontent.com/81041775/112727318-a3b3ef00-8ee7-11eb-89d0-cad5b4140585.jpg"
},
	
{
		src:"https://user-images.githubusercontent.com/81041775/112727321-a7477600-8ee7-11eb-9658-8f3ada166764.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727366-d362f700-8ee7-11eb-993b-90fb70c3c382.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727369-d65de780-8ee7-11eb-9d44-31f1ab1f6863.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727376-d9f16e80-8ee7-11eb-9528-40ed6205ba4f.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727603-d9a5a300-8ee8-11eb-98ae-742886fb95b4.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727606-dca09380-8ee8-11eb-8b46-a36ad6c8a55f.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727608-df02ed80-8ee8-11eb-9e55-c1ceb4c95d96.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727610-e1654780-8ee8-11eb-9e92-961222691fee.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727615-e4603800-8ee8-11eb-9fe1-a6389f59bddb.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727616-e6c29200-8ee8-11eb-97f7-2f8b6e6fa0e1.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727618-e924ec00-8ee8-11eb-91d1-b48ae96c4e57.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727620-ede9a000-8ee8-11eb-8823-faaae872dd54.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727623-efb36380-8ee8-11eb-8926-61bac848cd35.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112727627-f2ae5400-8ee8-11eb-847d-620ad0523545.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728191-ba5c4500-8eeb-11eb-9af0-967316fb03f3.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728200-be886280-8eeb-11eb-9aaa-2606cb5e584a.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728202-c1835300-8eeb-11eb-8651-da4aa21c0f55.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728207-c47e4380-8eeb-11eb-9716-90d72b7a20bc.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728208-c8aa6100-8eeb-11eb-8237-916eb6b742d5.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728212-cb0cbb00-8eeb-11eb-9902-896a93d4807c.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728215-ce07ab80-8eeb-11eb-8e99-fec95429ad74.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728216-d1029c00-8eeb-11eb-8e5a-9c491fefc685.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728220-d4962300-8eeb-11eb-934d-5f9c88af1998.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728221-d6f87d00-8eeb-11eb-9c9a-e0b6f5906bd8.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728223-da8c0400-8eeb-11eb-9d6c-8ab48930ae05.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728227-dd86f480-8eeb-11eb-886d-603dd738f377.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728228-e11a7b80-8eeb-11eb-9691-92797edf713a.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728229-e4156c00-8eeb-11eb-94d5-a886101e47f4.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728235-e7a8f300-8eeb-11eb-8b03-f1f2381e3406.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728238-eaa3e380-8eeb-11eb-9e22-f26e4f8cd021.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728240-ed9ed400-8eeb-11eb-980a-5232857e093f.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728245-f2638800-8eeb-11eb-83ce-998fcbffff97.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728247-f4c5e200-8eeb-11eb-9716-53475e03ca1a.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728249-f8596900-8eeb-11eb-85ae-457801a43789.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728251-fabbc300-8eeb-11eb-89e5-336d667d6ccb.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728254-fdb6b380-8eeb-11eb-969b-1b8d30264cb7.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728256-00190d80-8eec-11eb-85a8-d952c2841ea7.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728259-0313fe00-8eec-11eb-8ba3-b69aa21a21ac.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728265-05765800-8eec-11eb-9974-c768238deb83.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728270-08714880-8eec-11eb-98d3-07e72ea2548f.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728272-0ad3a280-8eec-11eb-9ee6-e77f7d67e936.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728275-0dce9300-8eec-11eb-9fc4-1e91ae8a45a7.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728279-10c98380-8eec-11eb-8370-e7e243961026.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728281-13c47400-8eec-11eb-8fb8-cf65f6803948.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728283-1626ce00-8eec-11eb-82b1-7d4c16ceec6b.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728290-1a52eb80-8eec-11eb-8d27-45397ec1e438.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728294-1f179f80-8eec-11eb-9690-5d62184ef42f.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728296-22129000-8eec-11eb-8e21-693be12305f8.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728298-25a61700-8eec-11eb-8898-605693e01ac3.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728299-29399e00-8eec-11eb-9443-d8f870d7a03c.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728302-2c348e80-8eec-11eb-9eee-850aac10adb2.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728307-2e96e880-8eec-11eb-8d06-a9dfb1b09bdb.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728310-3191d900-8eec-11eb-8857-370ecd67576b.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112728313-35256000-8eec-11eb-8cd4-61ed4289c2df.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729163-6b64de80-8ef0-11eb-8d56-4557c7319b0c.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729164-6b64de80-8ef0-11eb-9628-17b34f6ceed8.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729168-6c960b80-8ef0-11eb-9fb5-65ad5f170a5b.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729170-6f90fc00-8ef0-11eb-83cb-8a692ddaa61e.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729171-715abf80-8ef0-11eb-9de6-ced8224e84f1.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729269-f0e88e80-8ef0-11eb-8a43-3f62cc506782.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729177-7881cd80-8ef0-11eb-8fbd-ae0865561784.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729309-1bd2e280-8ef1-11eb-8504-047171e49641.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729180-7a4b9100-8ef0-11eb-8ef2-135aded2562d.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729181-7d468180-8ef0-11eb-915d-42790685b3bf.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729431-a7e50a00-8ef1-11eb-96eb-1e9914702ed0.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729442-b92e1680-8ef1-11eb-9ec6-536ff14de2b9.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729445-bd5a3400-8ef1-11eb-99b8-d0286302e799.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729524-2477e880-8ef2-11eb-8abb-8a0c85eff270.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729452-c3501500-8ef1-11eb-9f95-e7eb20879a9f.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729539-407b8a00-8ef2-11eb-9a9d-538839117e5b.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729461-d2cf5e00-8ef1-11eb-8ee4-e2e374b2e8ad.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729468-dbc02f80-8ef1-11eb-939d-f9bed8a19e6d.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729469-dfec4d00-8ef1-11eb-86ac-c8ed982d61a1.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729474-e4186a80-8ef1-11eb-8453-70098566e3fd.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729482-ef6b9600-8ef1-11eb-80c0-ef720d5b83e8.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729489-fb575800-8ef1-11eb-9170-a35ad786de09.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729498-00b4a280-8ef2-11eb-8e54-abb0f6a5891e.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729502-04e0c000-8ef2-11eb-8493-261f07183926.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729504-09a57400-8ef2-11eb-9a3f-df63ffb0a33a.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729515-16c26300-8ef2-11eb-8a73-9737c76c1567.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729517-1cb84400-8ef2-11eb-88b9-4d49559db783.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729532-30fc4100-8ef2-11eb-8319-1dd136ea3019.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729555-51c49680-8ef2-11eb-84b9-f470a5ad37ea.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729564-66a12a00-8ef2-11eb-83cd-a8a34eb1d381.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729683-14acd400-8ef3-11eb-8d88-fd08149315a7.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729695-1bd3e200-8ef3-11eb-807c-c606a40e8b06.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729696-1d9da580-8ef3-11eb-8555-7f26dbfd66ee.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729697-1fffff80-8ef3-11eb-8bec-45d32a5adebf.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729698-21312c80-8ef3-11eb-8adb-70d3256b6f9e.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729699-23938680-8ef3-11eb-82ee-0bb1660a6f85.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729701-255d4a00-8ef3-11eb-9ff7-d353fed969c5.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729703-268e7700-8ef3-11eb-9456-ce9f259b039f.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729708-28f0d100-8ef3-11eb-94c4-f48b6a7489ce.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729710-2a21fe00-8ef3-11eb-8ab8-014bb62349e5.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729894-1f1b9d80-8ef4-11eb-9d5a-b98c42716008.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729901-22af2480-8ef4-11eb-92b1-eb15ead637fd.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729902-25117e80-8ef4-11eb-8f00-cc7c98745a0e.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729907-280c6f00-8ef4-11eb-8184-90bd4c2e91f8.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729853-fa272a80-8ef3-11eb-88d5-8c46e2798251.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729857-fc898480-8ef3-11eb-84eb-e3374c5b24cc.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729880-12974500-8ef4-11eb-8671-a1b5cc50d8e0.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729884-175bf900-8ef4-11eb-8233-bac5af10fe3d.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112729891-1b881680-8ef4-11eb-831f-ce68846f9717.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730014-b3860000-8ef4-11eb-8de6-ed1111bd3358.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730020-bb45a480-8ef4-11eb-8f36-dc32bf8fa3de.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730023-c0a2ef00-8ef4-11eb-83c5-0e89e4d89182.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730024-c6003980-8ef4-11eb-83e2-29c9d75cbc54.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730027-cb5d8400-8ef4-11eb-8c82-4bb5b9eeafb3.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730031-ce587480-8ef4-11eb-93ba-069eda9da663.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730032-d2849200-8ef4-11eb-9133-ace1422ee0f6.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730038-da443680-8ef4-11eb-9c18-de1672f729a2.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730052-f0ea8d80-8ef4-11eb-8183-2d1d849994a5.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730119-67878b00-8ef5-11eb-8a58-1677407249da.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730124-6d7d6c00-8ef5-11eb-855b-c9eebcbc9c3d.jpg"
	},

	{
		src:"https://user-images.githubusercontent.com/81041775/112730157-9998ed00-8ef5-11eb-9294-e45bcb4df1a5.jpg"
	}

];

const loadImg = () => {

img.map( (e)=>{

const $div = document.createElement("div"),

$img = document.createElement("img");

$div.classList.add("carousel-item");

$img.classList.add("d-block", "w-100");

$img.setAttribute("src", e.src)


$div.appendChild($img);


$fragment.appendChild($div);

})


$carousel.appendChild($fragment);

}


loadImg();

}