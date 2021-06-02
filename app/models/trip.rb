class Trip < ApplicationRecord
    belongs_to :carlisting,
        primary_key: :id,
        foreign_key: :car_id,
        class_name: :Carlisting

end