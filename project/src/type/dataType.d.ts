export namespace dataType {
  export class fromData_Type {
    SearchQuery?: string
    name?: string = ''
    title?: string = ''
    image_fun_url?: string = ''
    image_url?: string = ''
    image_urls_url?: string = ''
    price?: number | strin = 0
    status?: number = 0
    desc?: string = ''
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
