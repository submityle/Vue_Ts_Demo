export namespace dataType {
  export interface fromData_Type {
    SearchQuery?: string
    name?: string
    title?: string
    image_fun_url?: string
    image_url?: string
    image_urls_url?: string
    price?: number | string
    status?: number
    desc?: string
  }
  export interface goodData_Type {
    _id: string | number
    name: string
    title: string
    image_fun_url?: string
    image_url: string
    image_urls_url?: string
    price: number | string
    status: number
    desc?: string
  }
}
