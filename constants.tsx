type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const notifications = [
    {
      id: 1,
      value: 'New funds created by Elvis',
      date: 'Apr 17, 8:40 AM',
      isRead: true
    },
    {
      id: 2,
      value: 'Aguka fund increased by  5%',
      date: 'Apr 17, 8:40 AM',
      isRead: true
    },
    {
      id: 3,
      value: 'Aguka fund increased by  5%',
      date: 'Apr 17, 8:40 AM',
      isRead: false
    },
    {
      id: 4,
      value: 'Aguka fund increased by  5%',
      date: 'Apr 17, 8:40 AM',
      isRead: false
    },
    {
      id: 5,
      value: 'Aguka fund increased by  5%',
      date: 'Apr 17, 8:40 AM',
      isRead: false
    },
    {
      id: 6,
      value: 'Rukundo Jean subscribed to  Unguka fund',
      date: 'Apr 17, 8:40 AM',
      isRead: false
    },
  ]

  
  export const payments: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    // ...
  ]

  export const ASSETS_TYPES = [
    { value: 'Equity Securities' },
    { value: 'Fixed Income' },
    { value: 'Real Estate' },
    { value: 'Alternative Investments' }
  ];
  