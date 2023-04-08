export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      conversations: {
        Row: {
          id: string
          last_updated: string
          user1_id: string
          user2_id: string
        }
        Insert: {
          id?: string
          last_updated?: string
          user1_id: string
          user2_id: string
        }
        Update: {
          id?: string
          last_updated?: string
          user1_id?: string
          user2_id?: string
        }
      }
      messages: {
        Row: {
          conversation_id: string
          id: string
          message_text: string
          sender_id: string
          timestamp: string
        }
        Insert: {
          conversation_id: string
          id?: string
          message_text: string
          sender_id: string
          timestamp?: string
        }
        Update: {
          conversation_id?: string
          id?: string
          message_text?: string
          sender_id?: string
          timestamp?: string
        }
      }
      subscription_plans: {
        Row: {
          description: string
          id: string
          name: string
          price: number
        }
        Insert: {
          description: string
          id?: string
          name: string
          price: number
        }
        Update: {
          description?: string
          id?: string
          name?: string
          price?: number
        }
      }
      users: {
        Row: {
          email: string
          id: string
          password: string
          subscription_end_date: string | null
          subscription_id: string | null
          subscription_status: string
        }
        Insert: {
          email: string
          id?: string
          password: string
          subscription_end_date?: string | null
          subscription_id?: string | null
          subscription_status?: string
        }
        Update: {
          email?: string
          id?: string
          password?: string
          subscription_end_date?: string | null
          subscription_id?: string | null
          subscription_status?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
