CodeSettings?
Sidekick Chat Shell
SaveSave & CloseClose
        /* =================================================
           USER MESSAGE
           ================================================= */

        [data-message-author-role="user"]
        > div,

        [data-message-author-role="user"]
        > div > div,

        [data-message-author-role="user"]
        .markdown,

        [data-message-author-role="user"]
        .whitespace-pre-wrap,

        [data-message-author-role="user"]
        [class*="bg-"],

        [data-message-author-role="user"]
        [class*="justify-end"],

        [data-message-author-role="user"]
        [class*="items-end"] {
            width:
                100% !important;

            max-width:
                none !important;

            margin-left:
                0 !important;

            margin-right:
                0 !important;

            justify-content:
                flex-start !important;

            align-items:
                flex-start !important;

            text-align:
                left !important;

            background:
                transparent !important;

            background-color:
                transparent !important;

            background-image:
                none !important;

            border:
                none !important;

            border-radius:
                0 !important;

            box-shadow:
                none !important;
        }

        [data-message-author-role="user"]::before {
            content:
                "${SK.userInitial}";

            position:
                absolute;

            left:
                10px;

            top:
                16px;

            width:
                27px;

            height:
                27px;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            color:
                white;

            background:
                var(
                    --sk-blue
                );

            border:
                1px solid
                #004b68;

            font-weight:
                bold;

            font-size:
                14px;
        }

        [data-message-author-role="user"]::after {
            content:
                "${SK.userName}";

            position:
                absolute;

            left:
                48px;

            top:
                7px;

            color:
                var(
                    --sk-user
                );

            font-weight:
                bold;

            font-size:
                12px;
        }

        [data-message-author-role="user"]
        p,

        [data-message-author-role="user"]
        span,

        [data-message-author-role="user"]
        li,

        [data-message-author-role="user"]
        div {
            color:
                #111111 !important;

            -webkit-text-fill-color:
                #111111 !important;

            text-align:
                left !important;

            margin-left:
                0 !important;

            margin-right:
                0 !important;
        }

        [data-message-author-role="user"]
        img {
            background:
                initial !important;

            border-radius:
                6px !important;

            -webkit-text-fill-color:
                initial !important;
        }

1599
        48px;
1600
​
1601
    top:
1602
        7px;
1603
​
1604
    color:
1605
        var(--sk-user);
1606
​
1607
    font-weight:
1608
        bold;
1609
​
1610
    font-size:
1611
        12px;
1612
}
1613
​
1614
​
1615
/*
1616
   Force user text back to normal black text
1617
   and keep it left aligned.
1618
*/
1619
[data-message-author-role="user"]
1620
p,
1621
​
1622
[data-message-author-role="user"]
1623
span,
1624
​
1625
[data-message-author-role="user"]
1626
li,
1627
​
1628
[data-message-author-role="user"]
1629
div {
1630
    color:
1631
        #111111 !important;
1632
​
1633
    -webkit-text-fill-color:
1634
        #111111 !important;
1635
​
1636
    text-align:
1637
        left !important;
1638
​
1639
    margin-left:
1640
        0 !important;
1641
​
1642
    margin-right:
1643
        0 !important;
1644
}
1645
​
1646
​
1647
/*
1648
   Don't wreck uploaded images.
1649
*/
1650
[data-message-author-role="user"]
1651
img {
1652
    background:
1653
        initial !important;
1654
​
1655
    border:
1656
        initial !important;
1657
​
1658
    border-radius:
1659
        6px !important;
1660
​
1661
    -webkit-text-fill-color:
1662
        initial !important;
1663
}
1664
​
1665
        /* =================================================
1666
           BUDDY MESSAGE
1667
           ================================================= */
1668
​
1669
        [data-message-author-role="assistant"]::before {
1670
            content:
1671
                "${SK.buddyInitial}";
1672
​
1673
            position:
1674
                absolute;
Line no.: 
Search for: 
user messa
1
<
>
Replace with: 
Replace
All
.*
Aa
×