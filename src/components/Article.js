import React from "react";
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
    article:{
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    title:{
        fontWeight: 'bold'
    },
    date:{
        fontSize: '0.85em',
        color: '#888'
    },
    author:{
        paddingBottom: 10,
        paddingTop: 10
    },
    body:{
        paddingLeft: 20
    }
}

const dateToStr = (dt) => new Date(dt).toDateString();

const Article = (props) => {
    const { article, author } = props;
    //const author = store.lookupAuthor(article.authorId);
    
    return(
        <div style={styles.article}>
            <h1 style={styles.title}>{article.title}</h1>
            <div style={styles.body}>{article.body}</div>
            <div style={styles.date}>{dateToStr(article.date)}</div>
            <div style={styles.author}>Author: <a href={author.website}>{author.firstName} {author.lastName}</a></div>
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        date: PropTypes.string.isRequired
    })
}

function extraProps(store, originalProps){
    return{
        author: store.lookupAuthor(originalProps.article.authorId),
    }
}

export default storeProvider(extraProps)(Article);