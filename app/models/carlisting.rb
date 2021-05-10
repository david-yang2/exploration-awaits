class Carlisting < ApplicationRecord
    has_many :trips,
        primary_key: :id,
        foreign_key: :carlisting_id,
        class_name: :Trip
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end