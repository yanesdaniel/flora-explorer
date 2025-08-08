export interface Plant {
  id: number
  common_name: string
  scientific_name: string[]
  family: string | null
  genus: string | null
  default_image: {
    original_url: string
    regular_url: string | undefined
  } | null
}
