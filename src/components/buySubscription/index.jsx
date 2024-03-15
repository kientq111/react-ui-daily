const subscription = [
  {
    name: "Ice Mobile 10GB",
    description: "Up to 100Mbit/s",
    logo: "https://s3-alpha-sig.figma.com/img/f542/ce48/cf243b656c85ab1b46d0d885f9255acf?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DWNmrFpnyEKtVcgldOBkuRSjeZjXcVU25k~RedP6MYJqEcwi-FNDYynCFVTfQpR5CMyOdP25jN7jOX3UkwFv3dyMb8dS3tNkJZDutt-2CkDMgAfVysNhujgIMOwlf9iMeQh1rFZHMTvz9rLgv~xvhjoJ1fZtG0-ZsaFkPoFh3grPibPsSuKXdhHj2QPFsV41qXv0KJRz1rWojmKaLUszCjOkP2-cdChkSt7qz6IlMgWqTDAxwPvxP2ATf1hM7jwp2JRZJw39sGuH8IFn8590ccjAMX1PAaT2U1VE-ILqibnUOWOU5yxtCfGTL1nOj9ct1fTyudxQ1SvLM-QX1ecMaw__",
    price: "299,-",
    shadow_color: "#FFFBEC",
  },
  {
    name: "Telia Mobil 15GB",
    description: "Unlimited calls, SMS and MMS",
    logo: "https://s3-alpha-sig.figma.com/img/686b/593f/d91364131e516da9980a2903048f5869?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DsoNwfQIuFKsSU017bfH05gLZUBvx1M5zjNqUV5My5Q0TPF8lCRtWD4oxCEZ939nms4afsyLt-PlvJLtW5EsMB7hriV82CUsr6990v340tT4hKi-ZrpS8n5UxXBmxz9uzPfesbdwUCRXHg5-~wlItoLuy45g3fO5j2mudXSDO6Bg1OJIh4Eo8rLpig4i0oOE5URvplo4cPszJ2s41N~qa6NtSsCko3~ON7OeH9jDUmoKoraicZI3rewkK2XDCjr6Yu-29Wszeqo4j~bfSjkzFF4fM2SG1KtxnS1I1dxmD9BBb3u5dhqr6LmcURMv7QaCrvqnv1bYPGSjUvDcLsVomg__",
    price: "953,-",
    shadow_color: "#FFFBEC",
  },
  {
    name: "Telenor Next Fast",
    description: "Up to 100Mbit/s",
    logo: "https://s3-alpha-sig.figma.com/img/7d43/1ad6/6f1b056ef1142b12f416a34418532f09?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=egpF9jExRPCnSAUFCPO44t7zLonh3pw4uZuDfpa~mBIhlZshNZGs-PuOjZI58aFNNFtmzLrw-KSoB5r5RBmAG5uhIWzMu8jeANixmaSoLfWqvB87HysZNkwQLjiGW4XGX0C2u4pctHRHHo~HxNga47mTcgcuWautND5W4bRMMnUQq2znxxsXBa9envoJMyId6MsUSSYomD5uTJp8qeTncJ8yeGCl5-StF6R05NdW0ALqm1DQ1ZyGgFiWB9-Ss~QTBcrW7lrZwbMdD6q2OTrMYadaViOC-LJLiZOPgBIZhUpBzlB9BQv-WVVbclaQ94jUD4V4HnVSK5nXnp8NLUYusg__",
    price: "1028,-",
    shadow_color: "#FFFBEC",
  },
];

const BuySubScription = () => {
  return (
    <div className="w-[1300px] h-[839px] font-poppins rounded-3xl bg-[#F4F5FA] shadow-sm py-28 px-40">
      <h1 className="text-3xl font-merriweather font-black text-center">
        Get the most out of your mobile <br /> with the right subscription
      </h1>
      <h3 className="mt-6 text-lg text-center font-normal">
        All devices come with free delivery or pickup as standard. See
        information on <br /> available shopping options for your location.
      </h3>
      <div className="mt-14 flex justify-between items-center">
        {subscription.map((item) => (
          <div
            className={`w-[285px] p-10 h-[326px] bg-white shadow-[-1.3rem_-1.3rem_0_0_${item.shadow_color}] rounded-2xl`}
          >
            <img src={item.logo} alt="" className="h-8" />
            <h2 className="mt-4 text-lg font-semibold">{item.name}</h2>
            <h4 className="text-sm">{item.description}</h4>
            <div className="mt-4 flex items-center">
              <h3 className="text-2xl font-bold">{item.price}</h3>
              <h4 className="text-sm">/month</h4>
            </div>
            <div className="mt-10">
              <button
                className="rounded-[41px] bg-[#F4F5FA] py-4 px-6 font-medium border-[1px] border-[#F0F0F6]
            shadow-[0_4px_0_0_#E7E7FB] hover:-translate-y-1.5 transition    
            "
              >
                Add subscription
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 flex justify-center w-full">
        <button className="py-4 px-6 bg-black text-white rounded-[41px] hover:-translate-y-1.5 transition">
          See all subscriptions
        </button>
      </div>
    </div>
  );
};

export default BuySubScription;
