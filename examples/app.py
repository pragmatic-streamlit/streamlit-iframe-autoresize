import streamlit as st

st.text_area("This is a text area (parent)")
st.markdown(
    """
    <style>
        header[data-testid="stHeader"] {
            display: None;
        }
        footer {display: none;}
    </style>""",
    unsafe_allow_html=True,
)

for i in range(100):
    st.text_area("This is a text area", key=f'{i}')
