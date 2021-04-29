class Trip < ApplicationRecord
    belongs_to :carlisting,
        primary_key: :id,
        foreign_key: :carlisting_id,
        class_name: :Carlisting

end